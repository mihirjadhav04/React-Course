import React from "react";
import Button from "./Button"




// function App(){ - default method
//Below it is just converted to arrow function.
const App = () => {
    return (
        //Always remember : You can only return only one element in the end - Parent element.
        <div>
            <h1 style={{ textAlign: "center" }}>Hello World!</h1>
            {/* <button className="button">Click Me!</button> */}

            {/* Passing Properties in the component - props. */}
            <Button title="Click"/> 
            <Button title="Don't Click"/>
            <Button />
        </div>

       
    )
}


//You need to export the component which you created. Then only you can use in other files.
export default App;