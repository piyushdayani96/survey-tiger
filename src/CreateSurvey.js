import React , { Component, useState }  from "react";
import "./App.css";
import Publish from "./Publish.js"
import Options from "./Options.js";
import Input from "./Input.js";

const CreateSurvey=()=>{
  const [select, setselect] = useState(false);
  const [val, setval] = useState("Select Question Type");
  const [array, setarray] = useState([{ text: "" }]);
  const [surveyList, setsurveyList] = useState([]);
  const [question, setquestion] = useState("");
  const [isPublished, setIsPublished] = useState(true);
  const handleArray = (event) => {
    const arr = array.slice();
    arr.push({ text: "" });
    setarray(arr);
  };
  const change = (event, id) => {
    let text = event.target.value;
    let arrayCopy = [...array];
    arrayCopy[id].text = text;
    setarray(arrayCopy);
  };
  const handleNegative = (event, id) => {
    const arr = array.slice();
    const filteredArray = arr.filter((item, index) => index != id);
    setarray(filteredArray);
  };
  const addobj = () => {
    let obj = {
      questionType: val,
      question: question,
      answer: array,
    };
    setselect(false);
    let copysurveyList = [...surveyList];
    copysurveyList.push(obj);
    setsurveyList(copysurveyList);
    setval("Select Question Type");
    setarray([{ text: "" }]);
    setquestion("");
  };
  const handlePublish = () => {
    let obj = {
      questionType: val,
      question: question,
      answer: array,
    };
    setselect(false);
    let copysurveyList = [...surveyList];
    copysurveyList.push(obj);
    setsurveyList(copysurveyList);
    setval("Select Question Type");
    setarray([{ text: "" }]);
    setquestion("");
    setIsPublished(false);
  };
  return (
    <>
        {isPublished ? (
        <div>
         
          <select
            value={val}
            id="options"
            className="options"
            onChange={(event) => {
              setselect(true);
              setval(event.target.value);
              if (event.target.value === "single-select")
                setarray([{ text: "" }, { text: "" }]);
            }}
          >
            <option value="do-select">Select Question Type</option>
            <option value="multi-select">multi-select</option>
            <option value="single-select">single-select</option>
          </select>
            
          {select && (
            <>
              <Input setquestion={setquestion} />
              <h4 className="h1p mt-2 ">Options</h4>
              {val == "multi-select" ? (
                array.map((item, index) => (
                  <Options
                    handleNegative={handleNegative}
                    id={index}
                    key={index}
                    array={array}
                    handleArray={handleArray}
                    change={change}
                  />
                ))
              ) : (
                  <>
                    <Options
                      id={0}
                      handleNegative={null}
                      handleArray={handleArray}
                      change={change}
                      array={array}
                    />
                    <Options
                      id={1}
                      handleNegative={null}
                      handleArray={handleArray}
                      change={change}
                      array={array}
                    />
                  </>
                )}
            </>
          )}
          {(array.length == 4 || val === "single-select") && (
            <div className="buttondiv">
              <button type="submit" className="btn btn-warning m-2" onClick={addobj}>Add Question</button>
              <button type="submit" className="btn btn-warning m-2" onClick={handlePublish}>Publish</button>
            </div>
          )}
        </div>
      ) : (
          <div>
            <Publish surveyList={surveyList} />
          </div>
        )}
    </>
  );
}

export default CreateSurvey;

