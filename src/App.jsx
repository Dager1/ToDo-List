import "./App.css";
import Input from "./componets/Input";
function App() {
  return (
    <div className="mx-auto max-w-lg p-4 border border-blue-500 rounded-lg h-80">
      <div>
        <h1 className="text-3xl font-bold underline mb-4">TODO-LIST</h1>
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
}

export default App;
