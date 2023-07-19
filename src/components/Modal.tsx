import { useModal } from "../App";
import History from "./History";
type Props = {
  children?: React.ReactNode;
};
const Modal = ({ children }: Props) => {
  const { modalVisible, setModalVisible, history } = useModal();

  const handleClick = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <div
      className={`${
        !modalVisible ? "hidden" : ""
      } fixed w-full h-full left-0 top-0 z-10 bg-[rgba(0,0,0,0.4)] pt-24`}
    >
      <div className="relative bg-[#fefefe] w-4/5 lg:w-1/5 p-5 mx-auto rounded-sm  ">
        <span
          onClick={handleClick}
          className="absolute right-1.5 top-px text-2xl text-gray-400 cursor-pointer hover:text-black "
        >
          &times;
        </span>
        <div className="flex flex-col gap-1 overflow-y-scroll h-[50vh]">
          {history.length !== 0 ? (
            history.map((item, index) => (
              <History
                key={index}
                expression={item.expression}
                result={item.result}
              />
            ))
          ) : (
            <span>
              Your calculations and results appear here so that you can reuse
              them.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
