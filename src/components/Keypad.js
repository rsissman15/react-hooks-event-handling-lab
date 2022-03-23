// Code Keypad Component Here
//import react from "react";

function Keypad(){
    function handleInput(event){
        console.log(`Entering password...`);

    }
    return(
        <input
            type='password'
            name='password'
            placeholder="password"
            onChange={handleInput}

        />
    )
}
export default Keypad;