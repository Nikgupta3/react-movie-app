import React from "react";

const Result = (props) => {
    console.log(props.result)
  return (
    <div className="result">
        <img src={props.result.Poster} alt="No preview available"/>
        <h3>{props.result.Title} ({props.result.Year})</h3>
    </div>
  );
};

export default Result;
