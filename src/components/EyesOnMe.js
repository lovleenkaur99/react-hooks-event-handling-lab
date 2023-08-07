// Code EyesOnMe Component Here

import react from "react";

function EyesOnMe() { 

    function handelBlur () { 
        console.log("Hey! Eyes on me!")
    }

    function handleFocus () { 
        console.log("Good!")
    }
    return ( 
        <button onBlur={handelBlur} onFocus={handleFocus}>
            Eyes on me
        </button>
    )
}

export default EyesOnMe;
