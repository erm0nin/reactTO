import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";


function App() {
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     checked: false,
  //     item: "Lorem ipsum dolor sit amet.",
  //   },
  //   {
  //     id: 2,
  //     checked: true,
  //     item: "Lorem, ipsum dolor.",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "ipsum dolor sit amet.",
  //   },
  // ])
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todolist")) || [])

  const hundleCheck = (id)=>{
    const listitems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
    setItems(listitems)
    localStorage.setItem("todolist", JSON.stringify(listitems))
    }
    const handleDelete = (id)=>{
      const listItems = items.filter(item => item.id !== id)
      setItems(listItems)
    }
  return (
    <div className="App">
     <Header/>
     <Content items={items} setItems={setItems} hundleCheck={hundleCheck} handleDelete={handleDelete}/>
     <Footer length={items.length}/>
    </div>
  );
}

export default App;
