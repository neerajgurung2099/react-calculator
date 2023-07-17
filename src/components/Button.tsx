type Props = {
  text: string;
  className?: string;
};
const Button = ({ text }: Props) => {
  return (
    <div className="w-14 h-14 flex justify-center items-center bg-slate-200  cursor-pointer select-none active:bg-slate-300">
      <span className="text-lg font-semibold">{text}</span>
    </div>
  );
};

export default Button;
