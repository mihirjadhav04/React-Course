import React, {useState} from "react";
import "./App.css";

// Just 1 Rule to REMEMBER : NEVER MUTATE/CHANGE the STATE(varibles) DIRECTLY!
function App(){

  // const [your_variable,method_responsible_to_change_variable_value] = useState() - Basic syntax to use useState
  const [count, setCount] = useState(0)




  return(
    <div className="App">
      {/* <h1>Hello!</h1> */}
      <header>
        <h1>Counter App using State</h1>
      </header>
      <h2>Current value of state is {count}.</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      {/* <button onClick={() => setCount(count + 1)}>Increase Counter</button> */}
      <button onClick={() => (count >= 10) ? "": setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => (count <= 0) ? "": setCount(count - 1)}>Decrease Counter</button>
    </div>
  )
}

export default App;