import React from "react";
import "./SearchBox.styles.css";
const SearchBox = (props) => {
  return (
    <div>
      <input
        className="SearchBox"
        type="search"
        placeholder="Search for monster"
        onChange={props.search}
      />
    </div>
  );
};

export default SearchBox;
