import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="main search-form">
      <h1>Search </h1>

      <form
        action="#"
        className="form"
        onSubmit={(e) => {
          console.log(e.preventDefault());
        }}
      >
        <div className="input-group">
          <label htmlFor="query"></label>
          <input
            type="text"
            name="query"
            className="query"
            placeholder="Search here"
            onClick={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Search;
