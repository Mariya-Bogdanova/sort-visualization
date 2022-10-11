import { useState } from "react";
import "./styles.css";

function bubbleSort(blocks) {
  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < blocks.length - i - 1; j++) {
      if (blocks[j] > blocks[j + 1]) {
        const temp = blocks[j];
        blocks[j] = blocks[j + 1];
        blocks[j + 1] = temp;
      }
    }
  }
  return blocks;
}

function App() {
  const [blocks, setBlocks] = useState([4, 5, 2, 3, 1]);

  function startSort() {
    setBlocks(bubbleSort([4, 5, 2, 3, 1]));
  }
  return (
    <>
      <header>
        <button onClick={startSort}>start</button>
      </header>

      <div className="blockList">
        {blocks.map((block) => {
          const height = (block * 385) / blocks.length;
          return (
            <div style={{ height }} className="block" key={block}>
              {block}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
