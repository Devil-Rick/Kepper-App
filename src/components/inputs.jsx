import React, { useState } from "react";

function Inputs(props) {
    //creating an obj with title and content
    const [input , setInput] = useState({
        title:"", 
        content : ""
    });


// creating a function to access the imf entered 
    function handleChange(event) {
        // name indicates the input form
        // value indicates the value entered
        const {name , value} = event.target;
        // creating a func to get hold of the name and value entered
        setInput((prevInput)=>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

// this will return the value of the inputs we got
  return (
    <div>
      <form>
        <input 
            onChange={handleChange} 
            value={input.title} 
            name="title" 
            placeholder="Title" 
        />
        <textarea 
            onChange={handleChange} 
            value={input.content} 
            name="content" 
            placeholder="Take a note..." 
            rows="3"      
        />
        {/* onclick the new inputs will be updated */}
        <button onClick={(event)=>{
            props.onAdd(input)
            setInput({
                title:"",
                content:""
            });
            event.preventDefault();
        }}>
        Add
        </button>
      </form>
    </div>
  )
}

export default Inputs;
