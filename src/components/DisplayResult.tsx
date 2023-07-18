import { useExpression } from "../App";
import { AiOutlineHistory } from "react-icons/ai";
const DisplayResult = () => {
  const { expression } = useExpression();
  return (
    <div className="w-full relative">
      <AiOutlineHistory
        size={20}
        className="absolute top-0.5 cursor-pointer "
      />
      <input
        disabled
        value={expression}
        className="w-full bg-teal-100 p-2  outline-0  text-right text-3xl "
      />
    </div>
  );
};

export default DisplayResult;
