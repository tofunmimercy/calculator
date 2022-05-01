

let display = document.getElementById("display");
let result = document.getElementById(".result");

let buttons =Array.from (document.getElementsByClassName("button"));
buttons.map( button => {
    button.addEventListener('click', (e) => {
switch(e.target.innerText){
    case '0':
        display.innerText = "0";
        break;
    
        case 'DEL':
            if (display.innerText){   
            
     display.innerText = "" ;
            }
            
            break;
            case '=':
        
                   display.innerText=eval(display.innerText)
               
                
     
               break; 
               
        default:
        display.innerText += e.target.innerText;
}
    });
});
function radians_to_degree(radians){var pi = Math.PI;return radians* (180/pi);}
console.log(radians_to_degrees(0.7853981633974483));





























