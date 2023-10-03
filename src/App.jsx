import { useState } from "react";
import getBoard from "./array";
import { containerArray } from "./array";
import "./App.css";
import { useEffect } from "react";


function App() {
 const [state, setState] = useState(null)
  useEffect(() =>{
    getBoard()
  }, [state])

  const generateBoard = () =>{
    setState([])
  }

  const block = containerArray.map((item, index) => {
    return (
      <div key={index} className="game--row" style={{borderBottom: (index === 2) || (index === 5) ? "1px solid #f2f2f2" : "none"}}>
        {item.map((item, index) => {
          return (
            <div
              key={index}
              className="game_cell"
              style={{
                borderRight:
                  index === 2 || index === 5 ? "1px solid #f2f2f2" : "none",
                  cursor: item === " " ? "pointer" : "default"
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <main>
    <h1>
      Sudoku
    </h1>


      <div className="game--container">{block}</div>

      <button onClick={generateBoard}>Generate new board</button>
    </main>
  );
}

export default App;
