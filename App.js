import React from "react";
import ReactDOM  from "react-dom/client";

const element = <span>202020</span>

const HeadingComponent = () =>(
    <div id="container">
        
         <h1>jeshin its a functional component</h1>
    </div>
           
    )

const title=  (
   
        <h1 className="head">
            {element}
            Namaste react Title
            <HeadingComponent/>
             </h1>
           
 )



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(title)
