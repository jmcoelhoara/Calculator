// Calculator Program

const display = document.getElementById("display");


function appenToDisplay(input){
    display.value += input;

}

function cleardisplay(){
    display.value = "";

}

function calculate(){ 
    try{
    display.value = eval(display.value)
    }

    catch(Error){
        display.value = "Error";
    }


}