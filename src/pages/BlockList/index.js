function BlockList({ blocks, colorBlock, check, sorted }) {
  let background;

  return (
    <div className="blockList">
      {blocks.map((block) => {
        const height = (block * 385) / blocks.length;
        (() => {
          if (sorted?.includes(block)) {
            background = "green";
          } else {
            background =
              check[0] === block || check[1] === block ? colorBlock : "white";
          }
        })();
        return (
          <div style={{ height, background }} className="block" key={block}>
            {block}
          </div>
        );
      })}
    </div>
  );
}

export default BlockList;
