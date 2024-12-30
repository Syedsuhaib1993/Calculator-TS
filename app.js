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
        console.log(scr.value);
        scr.value = eval(scr.value);
    }
    catch (_a) {
        // let output = eval(scr.value)
        scr.value = "Error";
    }
}
function getback() {
    var output = scr.value;
    // output.substring(0,output.length-1);
    var mainoutput = output.length - 1;
    console.log(mainoutput);
}
scr.value = "";
// p.value = inp.value.substring(0, inp.value.length - 1);
