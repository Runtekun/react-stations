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

  return (
    <div>
    <header className="App-header">
      <h1>Dogアプリ</h1>
    </header>

    <main>
    <img
      src={dogUrl}
      alt="パピヨンの画像"
    />
    <p>犬の画像を表示するサイトです。かわいい犬をどうぞ！</p>
    </main>
    </div>
  )
}
