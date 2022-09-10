import React from "react";

//Component with props. 
// You can avoid using return and {} if you have only one element to pass and use () directly as shown below.
const Button = ({title="Default Value"}) =>  (
        <button className="button">{title} Me!</button>
    )


export default Button;