let scr = document.getElementById('num') as HTMLInputElement
// console.log(screen);

function getNumber(num:string):void {
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

function getback():void{
    
    let output = scr.value
    // output.substring(0,output.length-1);
  let mainoutput:any = output.length-1
    console.log(mainoutput);
    
} 
    scr.value = ""

    // p.value = inp.value.substring(0, inp.value.length - 1);