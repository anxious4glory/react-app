import React from "react";
import Login from "./Login";


let isLoggedIn = false;



function App() {
  return <div className="container">
  {isLoggedIn === true ? <h1>Hello World</h1> : <Login/>} </div>

}

export default App;
