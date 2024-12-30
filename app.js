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
function calculatePercentage() {
    if (scr.value !== '' && !isNaN(scr.value)) {
        scr.value = parseFloat(scr.value) / 100;
    }
}
function getback() {
    // scr.value--
    scr.value = scr.value.substring(0, scr.value.length - 1);
}
scr.value = "";
