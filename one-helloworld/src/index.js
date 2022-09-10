// import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

//Below is the way to import your files - css
import "./style.css";

//Imported the components that was created seperately. - Anything apart from .js file requires to mention the extention.
import App from "./App"


// Here you pass 2 things:
// 1. What you want to render - Element : <App/> 
// 2. Where you want to render. - document.getElementById('root')

// ReactDOM.render(<App/>, document.getElementById('root')) - OLD WAY!


//ReactDOM.render is no longer supported in React 18. Use createRoot instead.
//Until you switch to the new API, your app will behave as if it’s running React 17.

//NEW WAY!
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);