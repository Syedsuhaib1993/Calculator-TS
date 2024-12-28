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
    let output = eval(scr.value)
    console.log(output);
    scr.value = output
    
    } catch (error) {
            
    }
}


// function getback(){
    
//     let output = eval(scr.value)
//     output.length - 1
//     console.log(output);
    
// } 
    scr.value = ""