let display = document.getElementById('display');

let buttons =Array.from(document.getElementsByClassName('button'));

/*convert above button collection into Array hence we can
use Array methods*/

/*buttons.map(button=>{
    button.addEventListener("click",(e)=>{
       console.log('clicked');
       console.log(e);
       console.log(e.target);
       console.log(e.target.innerText);
    })
})*/


buttons.map(button=>{
    button.addEventListener("click",(e)=>{
        switch(e.target.innerText){
            case 'C':
                display.innerText="";
                break;
            case '←':
                if(display.innerText){
                display.innerText=display.innerText.slice(0,-1);
                }
                break;
            case "=":
                try{
                display.innerText=eval(display.innerText);}
                catch{
                    display.innerText="Error!"
                }
                break;
            default:
                display.innerText+=e.target.innerText;

        }
    })
})

/* If we use below code in display class then eval function 
redirects to the specified website 
(window.location.replace("https://www.google.com"))*/ 