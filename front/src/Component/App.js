import { useState } from "react";

function Item({ name, status, changeStatus }) {
  return (
    <li onClick={changeStatus(name, status)}>
      {name}
      {status ? "✅" : " "}
    </li>
  );
}

function ItemList({ todos, onClick }) {
  const list = todos.map((item) => {
    return <Item name={item.name} status={item.status} changeStatus={onClick} />;
  });
  return <ul>{list}</ul>;
}

export default function App() {
  const [todos, setTodos] = useState([{ name: "テスト", status: true }]);
  const [input, setInput] = useState("");

  function handleClickInsert() {
    const newTodos = [...todos, { name: input, status: false }];
    setTodos(newTodos);
  }

  function handleClickChageStatus({ name, status }) {
    console.log("ボタン押下ログ");
    console.log(name);
    console.log(status);
  }

  return (
    <div>
      <h1>Todo リスト</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClickInsert}>追加</button>
      <ItemList todos={todos} onClick={handleClickChageStatus} />
    </div>
  );
}
