import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Hello</h1>
      </header>
    </div>
  );
}

// 上記の書き方がJSXとなる
// react内で下記のように変換される
// JSXの利点は直感的に書きやすい。

// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "hello world",
//   );
// }

export default App;
