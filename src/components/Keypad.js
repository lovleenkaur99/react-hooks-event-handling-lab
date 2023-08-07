// Code Keypad Component Here

import react from "react";

function Keypad (){

    function handleChange() { 
        console.log("Entering password...")
    }

    return (
        <div>
            <input type={"password"} onChange={handleChange}/>
            
        </div>
    )
    console.log(<input/>)
}

export default Keypad;