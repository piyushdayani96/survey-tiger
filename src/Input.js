import React from "react";
import "./App.css"
function Input(props) {
  return (

    <div className="input-group mb-3 my-4">
      <span className="input-group-text">?</span>
      <input type="text" className="form-control" placeholder="type your question" onChange={(event) => props.setquestion(event.target.value)} />
      
    </div>
  );
}
export default Input;