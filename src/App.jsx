import "./App.css";
import Input from "./componets/Input";
function App() {
  return (
    <div>
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
