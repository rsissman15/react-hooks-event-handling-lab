// Code EyesOnMe Component Here
//import react from "react";

function EyesOnMe() {
    function focus(){
        console.log('Good!')
    }

    function blur (){
        console.log('Hey Eyes on Me')
    }

    return(
        <button onClick={focus}>Eyes on me</button> 
        // <button onClick={blur}>Eyes on me</button>
            
            
    )
}

export default EyesOnMe;