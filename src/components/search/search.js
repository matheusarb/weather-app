// will utilize the async package installed
import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = () => {
  
  const [search, setSearch] = useState("");

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={
        600
      } /*prevent user to push search button very fast and stack multiple requests*/
      value={search}
    />
  );
};

export default Search;

  // Search component is a dumb react component
  // Dumb components just present something to the DOM
  // They don't have logic inside then, therefore they're called dumb