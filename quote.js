var quotes = [
["Julius Caesar", "The die is cast.", "https://en.wikipedia.org/wiki/Julius_Caesar", "https://en.wikipedia.org/wiki/File:C%C3%A9sar_(13667960455).jpg"], 
["Napoleon Bonaparte", "Glory is fleeting, but obscurity is forever.", "https://en.wikipedia.org/wiki/Napoleon", "https://en.wikipedia.org/wiki/Napoleon#/media/File:Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg" ], 
["Bertrand Russell", "The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.", "https://en.wikipedia.org/wiki/Bertrand_Russell", "https://en.wikipedia.org/wiki/File:Bertrand_Russell_transparent_bg.png"],
["Simon de Montfort","Kill them all, God will recognise his own.", "https://en.wikipedia.org/wiki/Simon_de_Montfort,_6th_Earl_of_Leicester", "https://en.wikipedia.org/wiki/File:Simon_Leicester.jpg"],
["Charles V, Holy Roman Emperor", "I speak Spanish to God, Italian to women, French to men, and German to my horse.", "http://en.wikipedia.org/wiki/Charles_V,_Holy_Roman_Emperor", "https://en.wikipedia.org/wiki/File:Elderly_Karl_V.jpg" ],
["Socrates", "If a man does not know to what port he is sailing, no wind is favorable.", "https://en.wikipedia.org/wiki/Socrates", "https://en.wikipedia.org/wiki/File:Socrates_Louvre.jpg" ],
["Axel Oxenstierna", "Do you not know, my son, with how little wisdom the world is governed?", "https://en.wikipedia.org/wiki/Axel_Oxenstierna", "https://en.wikipedia.org/wiki/File:Axel_Oxenstierna_1635.jpg"],
["Thucydides","Men of Athens, there is not much time for exhortation, but to the brave a few words are as good as many.", "http://en.wikipedia.org/wiki/Thucydides", "https://en.wikipedia.org/wiki/File:Thucydides_pushkin02.jpg"],
["Cicero", "The sinews of war are infinite money.", "http://en.wikipedia.org/wiki/Cicero", "https://en.wikipedia.org/wiki/File:Cicero_-_Musei_Capitolini.JPG" ],
["Arthur Wellesley, 1st Duke of Wellington", "Nothing except a battle lost can be half so melancholy as a battle won.", "https://en.wikipedia.org/wiki/Arthur_Wellesley,_1st_Duke_of_Wellington", "https://en.wikipedia.org/wiki/File:Sir_Arthur_Wellesley,_1st_Duke_of_Wellington.png"]
];
var colors = ['#F44336', '#E91E63', '#7B1FA2', "#1A237E", "#90CAF9", "#1DE9B6", "#8BC34A", "#9E9E9E", "#607D8B", "#FF6E40"];

function set() {
	var quoteSet = Math.floor(Math.random()*quotes.length);
	var colorSet = Math.floor(Math.random()*colors.length);
	document.getElementById("quote").innerHTML = quotes[quoteSet][1];
	//document.getElementById("pic").src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/C%C3%A9sar_%2813667960455%29.jpg";
	document.getElementById("author").innerHTML = "- " + quotes[quoteSet][0];
	document.getElementById("wiki").href = quotes[quoteSet][2];
	document.getElementById("tweet-quote").href = "https://twitter.com/intent/tweet?text=" + quotes[quoteSet][1] + "- " + quotes[quoteSet][0];
	document.getElementById("fb-quote").href = "https://www.facebook.com/";
	document.getElementsByClassName("btn")[0].style.backgroundColor = colors[colorSet];
	document.getElementsByClassName("btn")[1].style.backgroundColor = colors[colorSet];
	document.getElementsByClassName("btn")[2].style.backgroundColor = colors[colorSet];
	document.getElementsByClassName("btn")[3].style.backgroundColor = colors[colorSet];
	document.body.style.backgroundColor = colors[colorSet];
	document.body.style.color = colors[colorSet];
};
document.onload = set();
document.getElementById("new").onclick = set();
