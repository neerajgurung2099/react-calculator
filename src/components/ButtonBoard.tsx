import Button from "./Button";

const ButtonBoard = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" />
      </div>
      <div className="flex gap-1">
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" />
      </div>
      <div className="flex gap-1">
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="*" />
      </div>

      <div className="flex gap-1">
        <Button text="C" />
        <Button text="0" />
        <Button text="=" />
        <Button text="/" />
      </div>
    </div>
  );
};

export default ButtonBoard;
