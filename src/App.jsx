import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import StudentForm from "studentapp1/StudentForm";

const App = () => (
  <>
    <h3>Student App 3</h3>
    <StudentForm/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
