import { useState } from "react";
import BlockList from "./../BlockList";
import "./styles.css";

function bubbleSort(blocks) {
  const versionList = [];
  let j;
  for (let i = 0; i < blocks.length; i++) {
    for (j = 0; j < blocks.length - i - 1; j++) {
      versionList.push([blocks.slice(), "yellow", blocks[j], blocks[j + 1]]);
      if (blocks[j] > blocks[j + 1]) {
        const temp = blocks[j];
        blocks[j] = blocks[j + 1];
        blocks[j + 1] = temp;
        versionList.push([blocks.slice(), "red", blocks[j], blocks[j + 1]]);
      }
    }
    versionList.push([blocks.slice(), "green", blocks[j]]);
  }
  return versionList;
}

function App() {
  const [blocks, setBlocks] = useState([4, 5, 2, 3, 1]);
  const [color, setColor] = useState("");
  const [check, setCheck] = useState([]);
  const [sorted, setSorted] = useState([]);

  function startSort() {
    const versionList = bubbleSort(blocks);
    (function series(i) {
      setTimeout(() => {
        const [newArr, color, x, y] = versionList[i];
        if (color === "green") {
          setSorted((prev) => [...prev, x]);
        } else {
          setColor(color);
        }
        setBlocks(newArr);
        setCheck([x, y]);

        i++;
        if (i < versionList.length) {
          series(i);
        }
      }, 800);
    })(0);
  }
  return (
    <>
      <header>
        <button onClick={startSort}>start</button>
      </header>
      <BlockList
        blocks={blocks}
        colorBlock={color}
        check={check}
        sorted={sorted}
      />
    </>
  );
}

export default App;
