import { useExpression } from "../App";
const DisplayResult = () => {
  const { expression } = useExpression();
  return (
    <div className="w-full">
      <input
        disabled
        value={expression}
        className="w-full bg-teal-100 p-2  outline-0  text-right text-3xl "
      />
    </div>
  );
};

export default DisplayResult;
