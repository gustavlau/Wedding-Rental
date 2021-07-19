import './App.css';
import StoreFront from "./StoreFront.js";


let itemArr = {text: "hello", 
name: "wassup"};

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        GJ Wedding Rentals lol
      </header>
      <body>
        <StoreFront/>
          
      </body>
    </div>
  );
}

