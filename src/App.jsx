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

  const handleUpdate = () => {
    console.log("画像を更新します"); 
    setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg");
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

    <button onClick={handleUpdate}>更新</button>
    </main>
    </div>
  )
}
