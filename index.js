import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.js";

const Index = ()=>{
    return(
        <>
          <App />
        </>
    )
}


const rootElement = document.getElementById("root");
const Root = ReactDOM.createRoot(rootElement);
Root.render(<Index />)
