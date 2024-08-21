import React, {useState} from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Content = ({items, setItems, hundleCheck, handleDelete}) => {

  return (
    <main>
      {items.length ? (
         <ul>
         {items.map(item=>(
           <li className='item' key={item.id}>
             <input 
             type="checkbox" 
             checked={item.checked}
             onChange={() => hundleCheck(item.id)}
             />
             <label
             style={(item.checked) ? {textDecoration: "line-through"} : null}
              onDoubleClick={()=>hundleCheck(item.id)}>{item.item}</label>
             <FaTrashAlt
             role='button'
             tabIndex='0'
             onClick={() => handleDelete(item.id)}
             />
           </li>
         ))}
       </ul>
      ) : (
        <p style={{
          marginTop: "40px",
          color: "Red",
          fontWeight:"bold",
          textAlign: "center"
        }}>
          Your list is Empty!
        </p>
      )
    }
    </main>
  )
}

export default Content
