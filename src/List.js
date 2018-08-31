import * as React from "react";
import data from "./data.json";

export default () => (
  <div className="App">
    {data.map(item => {
      return (
        <div key={item.id}>
          <img alt="img" src={item.img} />
          <h1>{item.name}</h1>
          <p>{item.content}</p>
        </div>
      );
    })}
  </div>
);
