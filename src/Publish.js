import React from 'react'
import "./App.css"
import {Link} from "react-router-dom"
function Publish(props){

  return (
    <form>
     {props.surveyList.map((item,index)=>(
       <div key={index}>
        {item.questionType==='multi-select'?
         <React.Fragment>
         <p>{item.question}</p>
         <div className="checkbox1">{item.answer.map((itm,idx)=>(
           <React.Fragment>
            <label  key={idx}>
               <input
                 name={itm.text}
                 type="checkbox"/>
               {itm.text}
           </label>
           <br></br>
           </React.Fragment>
        
         ))}</div>
        </React.Fragment>:
        <React.Fragment>
        <p>{item.question}</p>
        <div className="checkbox2">{item.answer.map((itm,idx)=>(
          <React.Fragment>
           <label  key={idx}>
              <input
                name={itm.text}
                type="radio"/>
              {itm.text}
          </label>
          </React.Fragment>
       
        ))}</div>
       </React.Fragment>}
       </div>
     ))}
    <div className="buttondiv">
    <Link to="/welcome">
     <button className="btn btn-success m-3 ">Confirm</button>
     </Link>
      </div>
    </form>
  )
}


export default Publish;
