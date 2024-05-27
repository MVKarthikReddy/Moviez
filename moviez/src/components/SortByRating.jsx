import React, { useState } from "react";

const HIGHEST = "highest";
const LOWEST = "lowest";

const SortByRating = ({ sortOption, setSortOption }) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-white  font-semibold">Sort By Rating :</p>
      <div className="text-white flex items-center gap-2">
        <label>
          <input
            className="cursor-pointer "
            type="radio"
            value="highest"
            checked={sortOption === HIGHEST}
            onChange={() => setSortOption(HIGHEST)}
          />
          Highest to Lowest
        </label>
        <label>
          <input
            type="radio"
            className="cursor-pointer"
            value="lowest"
            checked={sortOption === "lowest"}
            onChange={() => setSortOption(LOWEST)}
          />
          Lowest to Highest
        </label>
      </div>
    </div>
  );
};

export default SortByRating;
