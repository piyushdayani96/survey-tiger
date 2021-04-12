import React from "react";
import  "./App.css"
function Options(props) {
  return (

    <div class="input-group mb-3">
      <input className="form-control" type="text" value={props?.array[props.id]?.text}
        onChange={(event) => props.change(event, props.id)}
        placeholder="your answer" required
      />

      <span className="input-group-text spangreen"  onClick={props.array.length < 4 ? props.handleArray : null}>+</span>
      <span className="input-group-text spangreen"  onClick={(event) =>props.handleNegative ? props.handleNegative(event, props.id) : null}>-</span>
    </div>
  );
}
export default Options;