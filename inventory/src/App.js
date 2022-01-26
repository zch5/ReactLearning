import './App.css';
import Info from "./Info"

function App() {
  return (
    <div className="App">
        <Info />
        <AddItem />
    </div>
  );
}

function AddItem() {
  return (
    <div>
      <label for="text-form">Type something: </label>
      <input type="text" id="text-form"/>
    </div>
  )
}

export default App;
