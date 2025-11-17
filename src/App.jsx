// DO NOT DELETE

import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
    <header className="App-header">
      <h1>Dogアプリ</h1>
    </header>

    <main>
    <img
      src="https://images.dog.ceo/breeds/papillon/n02086910_8590.jpg"
      alt="パピヨンの画像"
    />
    <p>犬の画像を表示するサイトです。かわいい犬をどうぞ！</p>
    </main>
    </div>
  )
}
