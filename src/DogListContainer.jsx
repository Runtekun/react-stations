// @ts-check
import React, { useState, useEffect } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const result = await response.json();

        const breedList = Object.keys(result.message);
        setBreeds(breedList);

        if (breedList.length > 0) setSelectedBreed(breedList[0]);

      } catch (err) {
        console.error("犬種一覧の取得に失敗しました:", err);
      }
    };

    fetchBreeds();
  }, []);

    const handleShowImages = async () => {
    
    const breed = selectedBreed || breeds[0];
    if (!breed) return;

    const count = 12;
    const url = `https://dog.ceo/api/breed/${breed}/images/random/${count}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "success") {
        setImages(data.message);
      }
    } catch (err) {
      console.error("画像の取得に失敗しました:", err);
    }
  };


  return (
    <div>

      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />  
      
      <button onClick={handleShowImages}>表示</button>

      <h2>画像一覧</h2>
      <ul>
        {images.map((url) => (
          <li key={url}>
            <img
              src={url}
              alt={selectedBreed}
            />
          </li>
        ))}
      </ul>

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
