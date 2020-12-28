import React from "react";

const Search = (props) => {
  return (
    <section className="search-wrap">
      <input type="text" placeholder="Search here" className="searchbox" onChange={props.handleInput} onKeyPress={props.search}/>
    </section>
  );
};

export default Search;
