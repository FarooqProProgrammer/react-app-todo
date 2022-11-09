import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [text, setText] = useState("");

  const [list, setList] = useState([]);
  const [btn, setBtn] = useState("Add");

  const [btnClick, setBtnClick] = useState(false);
  const [e, sete] = useState("");
  const [valedit, setValedit] = useState(true);

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  const addItem = () => {
    const templist = [...list];
    templist.push(text);
    setList(templist);
    setText("");
  };
  const deleteItem = (item) => {
    const templist = [...list];
    templist.splice(item, 1);
    setList(templist);
  };
  const EditItem = (val) => {
    setBtnClick(true);
    setBtn("Edit");
    const templist = [...list];
    templist.splice(val, 1, text);
    setValedit(false);
    setList(templist);
  };
  const state = () => {
    setBtnClick(false);
    setBtn("Add");
  };

  return (
    <div className="main">
      <div className="box">
        <div className="inpt">
          {valedit ? (
            <input type="text" onChange={onInputChange} />
          ) : (
            <input type="text" value={text} onChange={onInputChange} />
          )}
        </div>
        <button onClick={btnClick ? EditItem : addItem} className="btn">
          {btn} Todo
        </button>
      </div>

      <ol>
        {list.map((item, index) => {
          return (
            <li>
              {item}
              <button onClick={() => deleteItem(index)}>Delete</button>
              <button onClick={() => EditItem(index)}>Edit</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
