let scr:any = document.getElementById('num') as HTMLInputElement
// console.log(screen);

function getNumber(num:number):void {
    scr.value += num
    console.log(num);

    
}



function clearall():void{
    scr.value = "" 
}



function getans():void{
   
    try {
        console.log(scr.value);
        scr.value= eval(scr.value)          
        
    } catch  {
        // let output = eval(scr.value)
        scr.value = "Error"
            
    }
}
function calculatePercentage():void {
    if (scr.value !== '' && !isNaN(scr.value)) {
        scr.value = parseFloat(scr.value) / 100;
    }
}
function getback():void{
    
    // scr.value--
    scr.value = scr.value.substring(0, scr.value.length - 1);  
} 
    scr.value = ""

    