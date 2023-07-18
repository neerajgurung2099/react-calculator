import { createContext, useContext, useState } from "react";
import ButtonBoard from "./components/ButtonBoard";
import DisplayResult from "./components/DisplayResult";
import Modal from "./components/Modal";

type ModalType = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  history: HistoryType[];
};
export const ModalContext = createContext<ModalType | null>(null);

export const useModal = () => {
  const modal = useContext(ModalContext);
  if (!modal) {
    throw new Error(`useModal has to be used within <ModalContext.Provider>`);
  }
  return modal;
};

type ExpressionType = {
  expression: string;
  setExpression: React.Dispatch<React.SetStateAction<string>>;
  calculateExpression: () => void;
};
export const ExpressionContext = createContext<ExpressionType | null>(null);

export const useExpression = () => {
  const expression = useContext(ExpressionContext);
  if (!expression) {
    throw new Error(
      `useExpression has to be used within <ExpressionContext.Provider>`
    );
  }

  return expression;
};

export type HistoryType = {
  expression: string;
  result: string;
};

function App() {
  const [expression, setExpression] = useState(`0`);
  const [modalVisible, setModalVisible] = useState(false);
  const [history, setHistory] = useState<HistoryType[]>([]);
  const calculateExpression = () => {
    try {
      const result = eval(`${expression}`);
      setExpression(result);
      setHistory([
        ...history,
        {
          expression: expression,
          result: result,
        },
      ]);
    } catch {
      setExpression(expression);
    }
  };
  return (
    <>
      <ExpressionContext.Provider
        value={{ expression, setExpression, calculateExpression }}
      >
        <ModalContext.Provider
          value={{ modalVisible, setModalVisible, history }}
        >
          <Modal></Modal>
          <div id="app">
            <div className="mx-auto w-64 rounded-sm flex items-center flex-col p-2 gap-1 bg-sky-400">
              <DisplayResult />
              <ButtonBoard />
            </div>
          </div>
        </ModalContext.Provider>
      </ExpressionContext.Provider>
    </>
  );
}

export default App;
