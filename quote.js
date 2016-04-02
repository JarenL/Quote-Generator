var quotes = [[" Henry Ward Beecher", "Hold yourself responsible for a higher standard than anybody expects of you. Never excuse yourself."], [" Napoleon Bonaparte", "Glory is fleeting, but obscurity is forever."], [" Bertrand Russell", "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts."]];
var colors = ['#d32f2f', '#C2185B', '#7B1FA2'];

document.onload = set();

function set() {
  var quote_count = Math.floor(Math.random()*quotes.length);
  var color_count = Math.floor(Math.random()*colors.length);
  document.getElementById("quote").innerHTML = quotes[quote_count][1];
  document.getElementById("wik").innerHTML = quotes[quote_count][0];
  document.getElementsByClassName("btn")[0].style.backgroundColor = colors[color_count];
  document.getElementsByClassName("btn")[1].style.backgroundColor = colors[color_count];
  document.getElementsByClassName("btn")[2].style.backgroundColor = colors[color_count];
  document.getElementsByClassName("btn")[3].style.backgroundColor = colors[color_count];
  document.body.style.backgroundColor = colors[color_count];
  document.body.style.color = colors[color_count];
}