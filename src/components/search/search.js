import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"; // async package installed for city search
import { geoApiOptions, GEO_API_URL } from "../api"; // import the two methods from the same file

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=10000000&namePrefix=&{inputValue}`,
      geoApiOptions
    ) // cities?
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            }
          })
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={
        600
      } /*prevent user to push search button very fast and stack multiple requests*/
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;

// Search component is a dumb react component
// Dumb components just present something to the DOM
// They don't have logic inside then, therefore they're called dumb
