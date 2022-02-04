import React, { useState } from "react";
import List from './List';

const App = () => {

    var [task, settask] = useState();
    const inputEvent = (e) => {
        settask(e.target.value);
    }

    var [Items, addItems] = useState([]);
    const ShowItems = () => {
        addItems((preVal) => {
            return [...preVal, task];
        })
        settask(' ');
    }

    const buttonClick = (id) => {
        addItems((preVal) => {
            return preVal.filter((ele, index) => {
                return index != id;
            })
        })
    }
    return (
        <>
            <h1>TO-DO LIST</h1>
            <input type="text" placeholder="Add tasks" onChange={inputEvent}
                value={task} 
            />&nbsp;
            <button onClick={ShowItems}>Add ➕</button>
            <ul>
                {Items.map((val,idx)=> {
                    return <List item={val}
                        check={buttonClick}
                        id={idx}
                    />
                })}
            </ul>
        </>
    )
};

export default App;