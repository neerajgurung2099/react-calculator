import { AiOutlineHistory } from "react-icons/ai";
import { useExpression, useModal } from "../App";
const DisplayResult = () => {
  const { expression } = useExpression();
  const { setModalVisible } = useModal();

  const handleClick = () => {
    setModalVisible(true);
  };
  return (
    <>
      <div className="w-full relative">
        <AiOutlineHistory
          size={20}
          onClick={handleClick}
          className="absolute top-0.5 left-0.5 cursor-pointer "
        />
        <input
          disabled
          value={expression}
          className="w-full bg-teal-100 p-2  outline-0  text-right text-3xl "
        />
      </div>
    </>
  );
};

export default DisplayResult;
