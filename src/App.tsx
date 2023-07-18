import { useState, createContext, useContext } from "react";
import "./App.css";
import ButtonBoard from "./components/ButtonBoard";
import DisplayResult from "./components/DisplayResult";

export type ExpressionType = {
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

function App() {
  const [expression, setExpression] = useState(`0`);

  const calculateExpression = () => {
    const result = eval(`${expression}`);
    setExpression(result);
  };
  return (
    <ExpressionContext.Provider
      value={{ expression, setExpression, calculateExpression }}
    >
      <div className="mx-auto w-64 rounded-sm flex items-center flex-col p-2 gap-1 bg-sky-400">
        <DisplayResult />
        <ButtonBoard />
      </div>
    </ExpressionContext.Provider>
  );
}

export default App;
