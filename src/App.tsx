import "./App.css";
import ButtonBoard from "./components/ButtonBoard";
import DisplayResult from "./components/DisplayResult";

function App() {
  return (
    <div className="mx-auto w-64 rounded-sm flex items-center flex-col p-2 gap-1 bg-sky-400">
      <DisplayResult />
      <ButtonBoard />
    </div>
  );
}

export default App;
