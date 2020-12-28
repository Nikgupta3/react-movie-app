import React from "react";
import Result from "./Result"

let Results = ({results}) => {
  return (
    <section className="results">
        { Array.isArray(results) && results.length > 0 ? results.map(element =><Result result={element} key={element.imdbID} />) : <h2 className="not-found">No Result found</h2>}
    </section>
  );
};

export default Results;
