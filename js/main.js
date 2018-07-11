var x = prompt("wpisz pierwszą liczbę");
var y = prompt("wpisz drugą liczbę");

function myNumbers(x, y) {
   return x == 20 || y == 20 || x + y <= 20;
}
document.getElementById("logika").innerHTML = myNumbers(x, y);