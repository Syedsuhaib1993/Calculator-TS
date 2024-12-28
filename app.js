var scr = document.getElementById('num');
// console.log(screen);
function getNumber(num) {
    scr.value += num;
    console.log(num);
}
function clearall() {
    scr.value = "";
}
function getans() {
    try {
        var output = eval(scr.value);
        scr.value = output;
    }
    catch (error) {
        scr.value = 'Error'
    }
}
// function getback(){
//     let output = eval(scr.value)
//     output.length - 1
//     console.log(output);
// } 
