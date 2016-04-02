var quotes = [[" Henry Ward Beecher", "Hold yourself responsible for a higher standard than anybody expects of you. Never excuse yourself."], [" Napoleon Bonaparte", "Glory is fleeting, but obscurity is forever."], [" Bertrand Russell", "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts."]];
var colors = ['#d32f2f', '#C2185B', '#7B1FA2'];

document.onload = set();

function set() {
  var count = Math.floor(Math.random()*quotes.length);
  document.getElementById("quote").innerHTML = quotes[count][1];
  document.getElementById("wik").innerHTML = quotes[count][0];
  document.getElementsByClassName("button")[0].style.backgroundColor = colors[count];
  document.getElementsByClassName("button")[1].style.backgroundColor = colors[count];
  document.getElementsByClassName("button")[2].style.backgroundColor = colors[count];
  document.getElementsByClassName("button")[3].style.backgroundColor = colors[count];
  document.body.style.backgroundColor = colors[count];
  document.body.style.color = colors[count];
}