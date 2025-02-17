import React from "react";

function Search({ search, setSearch }) {
  const handleChange = (event) => setSearch(event.target.value)

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value={search}
      />
    </div>
  );
}

export default Search;