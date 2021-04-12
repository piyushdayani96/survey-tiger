import React from "react";
import "./App.css";
import {BrowserRouter as Router,Switch,Route,Link,} from "react-router-dom";
import Choose from "./Choose";
import CreateSurvey from "./CreateSurvey.js";
import TakeSurvey from "./TakeSurvey.js";
import Welcome from "./Welcome.js"
import Response from "./Response.js"

export default function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
          <Route path="/createSurvey" exact>
              <Link to="/"><h1>Survey Tiger</h1></Link>
              <CreateSurvey />
          </Route>
          <Route path="/takeSurvey" exact>
              <Link to="/"><h1>Survey Tiger</h1></Link>
              <TakeSurvey />
          </Route>
          <Route path="/" exact>
              <Link to="/"><h1>Survey Tiger</h1></Link>
              <Choose />
          </Route>
          <Route path="/welcome" exact>
              <Welcome/>
          </Route>
          <Route path="/response" exact>
              <Response/>
          </Route>
      </Switch>
      </div>
    </Router>
  );
}
