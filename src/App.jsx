// DO NOT DELETE

import './App.css'
import React, { useState } from "react"; 

/**
 * @type {() => JSX.Element}
 */
export const App = () => {

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

  return (
    <div>
    <header className="App-header">
      <h1>Dogアプリ</h1>
    </header>

    <main>
    <img
      src={dogUrl}
      alt="かわいい犬の画像"
    />
    <p>犬の画像を表示するサイトです。かわいい犬をどうぞ！</p>

    <button onClick={handleFetchRandomDog}>更新 </button>
    </main>
    </div>
  )
}
