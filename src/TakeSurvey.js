import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
const TakeSurvey=()=>{
  return (
    <>
      <p>1.Which of the following apps you have in your phone?</p>
      <form className="question">
        <input type="checkbox" id="LinkedIn" name="LinkedIn"></input>
            <label for="linkedIn">LinkedIn</label><br></br>
        <input type="checkbox" id="Facebook" name="Facebook"></input>
            <label for="facebook">Facebook</label><br></br>
        <input type="checkbox" id="Instagram" name="instagram"></input>
            <label for="instagram">Instagram</label><br></br>
        <input type="checkbox" id="Twitter" name="Twitter"></input>
            <label for="Twitter">Twitter</label><br></br>
      
      <p>2. Are you free ?</p>
      <input type="radio" id="Yes" name="gender"></input>
          <label for="Yes">Yes</label>
      <input type="radio" id="No" name="gender"></input>
          <label for="No">No</label><br></br>
    </form>
    <Link to="/response">
     <button type="submit" className="btn btn-success m-3 ">Confirm</button>
     </Link>
      
    </>
  );
}

export default TakeSurvey;
