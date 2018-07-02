//function validateForm() {
//    var x = document.forms["myForm"]["fname1"].value;
//    var y = document.forms["myForm"]["fname2"].value;
function myNumbers() {
    var x = prompt("wpisz pierwszą liczbę", " ");
    var y = prompt("wpisz drugą liczbę", " ");
    if (x == 20 || y == 20 || x + y <= 20) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}