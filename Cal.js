let displayVal=""
function ButtonClick(val){
    try{
        let display=document.getElementsByClassName("display")[0];  
        if(val==="="|| val==="Enter"){
            let result=eval(displayVal);
            display.innerText=displayVal+"="+result;
        }else if(val==="C"){
            displayVal="";
            display.innerText="";
        }
        else{
            displayVal=displayVal+val;
            display.innerText=displayVal;
        }
    }
    catch(error){
        console.error(error);
        display.innerText = "Error";

    }
}
document.addEventListener("keydown", Keypress)
function Keypress(event) {
    let key = event.key;

    // Map Enter key to "="
    if (key === "Enter") key = "=";

    // Map Backspace to "C" for clearing
    if (key === "Backspace") key = "C";

    // Allow only calculator-related keys
    const validKeys = "0123456789+-*/.=C";
    if (validKeys.includes(key)) {
        ButtonClick(key);
    }
};