import { useState } from "react";
import { useModal } from "../App";
type Props = {
  children?: React.ReactNode;
};
const Modal = ({ children }: Props) => {
  const { modalVisible, setModalVisible } = useModal();

  const handleClick = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <div
      className={`${
        !modalVisible ? "hidden" : ""
      } fixed w-full h-full left-0 top-0 z-10 bg-[rgba(0,0,0,0.4)]`}
    >
      <div className="relative bg-[#fefefe] w-1/5 p-5 my-[15%] mx-auto rounded-sm">
        <span
          onClick={handleClick}
          className="absolute right-1.5 top-px text-2xl text-gray-400 cursor-pointer hover:text-black "
        >
          &times;
        </span>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
