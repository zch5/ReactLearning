import './App.css';
import { PropTypes } from "prop-types"; 
import Info from "./Info"

function App() {
  return (
    <div className="App">
        <Info title="Inventory" />
        <AddItem text="Zach"/>
        <AddItem text="Ralph" number={99}/>
    </div>
  );
}


function AddItem({text = "no name", number}) {
  const value = text;

  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={value} id="text-form"/>
      <p>{number}</p>
    </form>
  )
}

AddItem.defaultProps = {
  number: 2
};

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};

export default App;
