import * as React from "react";

class Form extends React.Component {
  state = {
    id: "",
    name: "",
    content: "",
    img: "http://placehold.it/50"
  };
  render() {
    return (
      <div>
        <input placeholder="Enter ID" type="text" name="id" />
        <input placeholder="Enter Name" type="text" name="name" />
        <input placeholder="Enter Content" type="text" name="content" />
      </div>
    );
  }
}

export default Form;
