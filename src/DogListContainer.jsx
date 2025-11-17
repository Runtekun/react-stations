// @ts-check
import React, { useState, useEffect } from "react";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const result = await response.json();

        const breedList = Object.keys(result.message);
        setBreeds(breedList);
      } catch (err) {
        console.error("犬種一覧の取得に失敗しました:", err);
      }
    };

    fetchBreeds();
  }, []);




  return (
    <div>
      <h2>犬種一覧</h2>
      <ul>
        {breeds.map((breed) => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </div>
  )
}

export default DogListContainer
