import { useExpression } from "../App";

type Props = {
  text: string;
};
const Button = ({ text }: Props) => {
  const { expression, setExpression, calculateExpression } = useExpression();
  const handleClick = () => {
    switch (text) {
      case `C`:
        setExpression(`0`);
        break;
      case `=`:
        calculateExpression();
        break;
      default:
        if (expression === `0`) {
          setExpression(text);
        } else {
          setExpression(expression + text);
        }
    }
  };
  return (
    <div
      onClick={handleClick}
      className="w-[24%] h-14 flex justify-center items-center bg-slate-200 cursor-pointer select-none active:bg-slate-300"
    >
      <span className="text-lg font-semibold">{text}</span>
    </div>
  );
};

export default Button;
