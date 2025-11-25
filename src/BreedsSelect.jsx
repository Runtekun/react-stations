// @ts-check
import React from "react";


export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  return (
    <select
      value={selectedBreed}
      onChange={(e) => setSelectedBreed(e.target.value)}
    >
      <option value="">犬種を選択</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option> 
      ))}
    </select>
  );
};


export default BreedsSelect
