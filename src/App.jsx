import "./App.css";
import Input from "./componets/Input";
function App() {
  return (
    <div className="mx-auto max-w-lg p-4 border border-blue-500 rounded-lg h-80 flex flex-grow flex-col">
      <div>
        <h1 className="text-3xl font-bold underline mb-4">TODO-LIST</h1>
      </div>
      <div className="flex-grow">
        <Input />
      </div>
    </div>
  );
}

export default App;
