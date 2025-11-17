// @ts-check

import React, { useState } from "react";
import { DogImage } from "./DogImage";

export const Description = () => {

    const [dogUrl, setDogUrl] = useState(
      "https://images.dog.ceo/breeds/papillon/n02086910_8590.jpg"
    );
  
      const handleFetchRandomDog = async () => {
      const url = "https://dog.ceo/api/breeds/image/random";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`レスポンスステータス: ${response.status}`);
        }
  
        const result = await response.json();
  
        setDogUrl(result.message);
        } catch (error) {
          console.error("データの取得に失敗しました:", error);
        }
    };
  
  return(
  <main>
    <DogImage imageUrl={dogUrl}/>

    <p>犬の画像を表示するサイトです。かわいい犬をどうぞ！</p>

    <button onClick={handleFetchRandomDog}>更新 </button>
  </main>
  )    
}

export default Description
