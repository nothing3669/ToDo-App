import React from "react";

const List = (props) => {
   return (
      <>
         <div className="myItem">
            <li>
               <button
                  className="plusBtn myIcon"
                  onClick={() => {
                     props.onSelect(props.id);
                  }}
               >
                  <i>x</i>
               </button>
               {props.text}
            </li>
         </div>
      </>
   );
};

export default List;
