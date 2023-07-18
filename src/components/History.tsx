import { HistoryType, useExpression, useModal } from "../App";

const History = ({ expression, result }: HistoryType) => {
  const { setExpression } = useExpression();
  const { setModalVisible } = useModal();
  const handleClick = (expression: string) => {
    setExpression(expression);
    setModalVisible(false);
  };
  return (
    <div>
      <span
        onClick={() => handleClick(expression)}
        className=" inline-block text-sm text-sky-500 border border-slate-400 rounded-md p-1 tracking-wide cursor-pointer select-none"
      >
        {expression}
      </span>
      <span className="text-sm mx-3 ">=</span>
      <span
        onClick={() => handleClick(result)}
        className=" inline-block  text-sm text-sky-500 border border-slate-400 rounded-md p-1 cursor-pointer select-none"
      >
        {result}
      </span>
    </div>
  );
};

export default History;
