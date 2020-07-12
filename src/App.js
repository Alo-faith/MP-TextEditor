import React, { useState } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};

const stylings = ["bold", "italic", "underline"];
const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [editColor, setColor] = useState("black");
  let [editStyle, setStyle] = useState("normal");
  let [styling, setStyling] = useState({});
  // let [x, setx] = useState(Object.values(styles));

  const newStyle = (style) => {
    // setStyling(styles[style]);

    console.log(x);
  };
  const x = Object.values(styles);
  const stylingBoxes = stylings.map((style) => (
    <button
      className="btn btn-light"
      style={styles[style]}
      key={style}
      onClick={() => {
        setStyle(style);
      }}
    >
      {style}
    </button>
  ));

  const colorBoxes = colors.map((color) => (
    <button
      style={{ backgroundColor: color, height: 30, width: 30 }}
      key={color}
      onClick={() => {
        setColor(color);
      }}
    />
  ));

  return (
    <div className="App">
      <div className="my-3">{stylingBoxes} </div>

      {/* <textarea
        style={{ color: editColor, ...styles["bold"], ...styles["italic"] }}
      /> */}

      <textarea style={{ color: editColor, ...styles[editStyle] }} />

      <div className="my-3">{colorBoxes}</div>
    </div>
  );
}

export default App;
