import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function Hello(props) {
  return <div>Hello {props.name}</div>;
}

function MyApp() {
  return (
    <div>
      <Hello name="Manuel" />
      <Hello name="Madina" />
      <Hello name="Michelle" />
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
