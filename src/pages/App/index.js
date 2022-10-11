import "./styles.css";

function App() {
  const blocks = [4, 5, 2, 3, 1];

  return (
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
  );
}

export default App;
