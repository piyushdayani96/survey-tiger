import {React} from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Choose =()=>{
    return (
      <>
        <Link to="/createSurvey"><button className="btn btn-info m-3">Create Survey</button></Link>
        <Link to="/takeSurvey"><button className="btn btn-info m-3">Take Survey</button></Link>
      </>
    );
}

export default Choose;