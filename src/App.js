import { render } from "@testing-library/react";

function App() {

  const greeting = "hi";

  const input = <input type ="text" onChange={() => {console.log("clicked")}} placeholder = {greeting} />;

    return input;
}


export default App;
