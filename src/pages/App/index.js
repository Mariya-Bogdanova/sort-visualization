import { useState } from "react";
import "./styles.css";

function bubbleSort(blocks) {
  const versionList = [];
  for (let i = 0; i < blocks.length; i++) {
    for (let j = 0; j < blocks.length - i - 1; j++) {
      if (blocks[j] > blocks[j + 1]) {
        const temp = blocks[j];
        blocks[j] = blocks[j + 1];
        blocks[j + 1] = temp;
        versionList.push(blocks.slice());
      }
    }
  }
  return versionList;
}

function App() {
  const [blocks, setBlocks] = useState([4, 5, 2, 3, 1]);

  function startSort() {
    const versionList = bubbleSort(blocks);
    (function series(i) {
      setTimeout(() => {
        setBlocks(versionList[i]);
        i++;
        if (i < versionList.length) {
          series(i);
        }
      }, 250);
    })(0);
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
