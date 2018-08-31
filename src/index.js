import * as React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import List from "./List";
import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <Form />
      <List />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
