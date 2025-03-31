import { useState, useEffect } from "react";

export default function Grid() {
  const [gridColors, setGridColors] = useState(Array(9).fill("white"));
  console.log(gridColors,"gridColors")
  const [clickSequence, setClickSequence] = useState([]);

  const updateColor = (index) => {
    if (gridColors[index] === "white") {
      setGridColors((prev) => prev.map((c, i) => (i === index ? "green" : c)));
      setClickSequence((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    if (clickSequence.length === 9) {
      clickSequence.forEach((index, delay) => {
        console.log(index,"index")
        setTimeout(() => {
          setGridColors((prev) => prev.map((c, i) => (i === index ? "orange" : c)));
        }, delay * 500);
      });
    }
  }, [clickSequence]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "5px" }}>
      {gridColors.map((color, index) => (
        <div
          key={index}
          onClick={() => updateColor(index)}
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
            border: "1px solid black",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
}