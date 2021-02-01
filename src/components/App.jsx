import React, { useState } from "react";
import Heading from "./header";
import Foot from "./Footer";
import Inputs from "./inputs";
import Note from "./note";



function App() {
    const [newNote , setNote] = useState([]);

    function AddItem(input) {
        console.log("working");
        setNote((preValue)=>{
            return [...preValue , input]
        })
    }

    function delItem(id) {
        setNote((prevValue)=>{
            return prevValue.filter((note , index)=>{
                return index!==id
            })
        })
    }

    return(
        <div>
            <Heading/>
            <Inputs onAdd={AddItem}/>
            {newNote.map((noteItem , index)=>{
                return(
                    <Note
                        key={index}
                        id = {index}
                        title = {noteItem.title}
                        content = {noteItem.content}
                        onDel = {delItem}
                    />
                );
            })}
            <Foot/>
        </div>
    );
};

export default App;
