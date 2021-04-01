import "./App.css";
import { useState } from "react";
import List from "./item";

// function App() {
//    const [value, setValue] = useState(0);

//    const Inc = () => {
//       let newVal = value + 1;
//       setValue(newVal);
//    };
//    const Dec = () => {
//       let newVal = value - 1;
//       if (newVal >= 0) {
//          setValue(newVal);
//       } else {
//          alert("Decrement Limit Exceeded");
//       }
//    };

//    return (
//       <div className="App">
//          <div className="card">
//             <h1>{value}</h1>
//             <div className="btnDiv">
//                <button className="plusBtn btn" onClick={Inc}>
//                   Increment
//                </button>
//                <button className="plusBtn btn" onClick={Inc}>
//                   Decrement
//                </button>
//             </div>
//          </div>
//       </div>
//    );
// }

function App() {
   const [val, setVal] = useState("");
   const [value, setValue] = useState([]);

   const Add = (event) => {
      setVal(event.target.value);
   };

   const submit = () => {
      setValue((oldVal) => {
         return [...oldVal, val];
      });
      setVal("");
   };

   const deleteItem = (id) => {
      console.log("Deleted");

      setValue((oldItems) => {
         return oldItems.filter((val, ind) => {
            return ind !== id;
         });
      });
   };

   return (
      <div className="App">
         <div className="card">
            <h1>My ToDo List App</h1>
            <div className="inputDiv">
               <div className="forhr">
                  <input type="text" name="item" placeholder="Add an item" onChange={Add} value={val} autoFocus />
                  <hr />
               </div>
               <button className="plusBtn" onClick={submit}>
                  <i>+</i>
               </button>
            </div>
            <div className="Output">
               <div className="myItem">
                  <ol>
                     {value.map((val, ind) => {
                        return <List key={ind} id={ind} text={val} onSelect={deleteItem} />;
                     })}
                  </ol>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
