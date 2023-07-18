import { useState } from "react";
type Props = {
  children?: React.ReactNode;
};
const Modal = ({ children }: Props) => {
  const [modalVisible, setIsModalVisible] = useState(false);

  return (
    <div
      className={`${
        !modalVisible ? "hidden" : ""
      } fixed w-full h-full left-0 top-0 z-10 bg-[rgba(0,0,0,0.4)]`}
    >
      <div className="bg-[#fefefe] w-1/5 p-5 my-[15%] mx-auto rounded-sm">
        <span className="block text-2xl text-gray-400 cursor-pointer hover:text-black text-right mb-2">
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
