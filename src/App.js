import Search from "./components/Search";
import Results from "./components/Results"
import { useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    s: "",
    results: []
  });

  const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=6921bea8";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(`${apiUrl}&s=${state.s}`).then(({ data })=> {
        let result = data.Search;
        setState(prevState => {
          return {...prevState , results:result}
        })
      }).catch(e=>console.log(e));
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Search App</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
