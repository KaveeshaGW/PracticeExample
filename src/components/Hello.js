const name="Kaveesha";

const displayMessage = () =>{
    return "I need help!";
}

function Hello(){
    return <h1>The message is : {displayMessage()}</h1>    //JSX (Java Script XML)
    //JSX allows to write XML like code
    //JSX tags have attribute tags named children
    //Makes the react code simpler
    //Inside JSX we can also write JS
}

// const Hello = ()=> <h1>Hello There</h1>  JSX syntax

export default Hello;  