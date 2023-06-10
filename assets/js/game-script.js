const data = [
{
	"id": 1,
	"image": "Batgame_3.png",
	"question": "Quel est l’autre nom de l’Homme-Mystère ?",
	"choices": ["Le Sphinx", "Saphir", "Le Joker"],
	"responses": ["Le Joker"]
},
{
	"id": 2,
	"image": "Batgame_4.png",
	"question": "Quelle est l’ancienne profession de Harley Quinn ?",
	"choices": ["Infirmière", "Psychiatre", "Dentiste"],
	"responses": []
},
{
	"id": 3,
	"image": "Batgame_5.png",
	"question": "Quel est l’objet fétiche de Double Face ?",
	"choices": ["Une pièce", "Un livre", "Un couteau"],
	"responses": []
},
{
	"id": 4,
	"image": "Batgame_6.png",
	"question": "Qui a produit Batman en 1964 ?",
	"choices": ["Stanley Kubrick", "Andy Warhol", "Peter Jackson"],
	"responses": []
},
{
	"id": 5,
	"image": "Batgame_7.png",
	"question": "Batman c’est aussi le nom d’une ville en...",
	"choices": ["Turquie", "Islande", "Allemagne"],
	"responses": []
},
{
	"id": 6,
	"image": "Batgame_8.png",
	"question": "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
	"choices": ["Le Pingouin", "Ra’s al Ghul", "Poison Ivy"],
	"responses": []
},
{
	"id": 7,
	"image": "Batgame_10.png",
	"question": "Quelle ville Batman défend-il ?",
	"choices": ["Gotham City", "Starling City", "Hell’s Kitchen"],
	"responses": []
},
{
	"id": 8,
	"image": "Batgame_11.png",
	"question": "Tim Burton a réalisé deux Batman, qui jouait Batman ?",
	"choices": ["Georges Clooney", "Val Kilmer", "Mickael Keaton"],
	"responses": []
},
{
	"id": 9,
	"image": "Batgame_12.png",
	"question": "Dans son premier Batman (1989) Jack Nicholson jouait :",
	"choices": ["Le Pingouin", "L’Homme Mystère", "Le Joker"],
	"responses": []
},
{
	"id": 10,
	"image": "Batgame_14.png",
	"question": "Qui est Jonathan Crane ? ",
	"choices": ["L’Épouvantail", "Le Joker", "Hugo Strange"],
	"responses": []
},
{
	"id": 11,
	"image": "Batgame_17.png",
	"question": "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
	"choices": ["Emma Watson", "Gigi Hadid", "Lola Iolani Momoa", "Zoë Kravitz"],
	"responses": []
},
{
	"id": 12,
	"image": "Batgame_18.png",
	"question": "Quel est le prénom des parents du jeune Bruce Wayne ?",
	"choices": ["Thomas et Martha", "Elaine et Georges", "Martha et James"],
	"responses": []
},
{
	"id": 13,
	"image": "Batgame_19.png",
	"question": "Qui interprète le Joker en 2008 ?",
	"choices": ["Heath Legder", "Haeth Ledger", "Heath Ledger"],
	"responses": []
},
{
	"id": 14,
	"image": "Batgame_20.png",
	"question": "En quelle année Robin fait il sa première apparition ?",
	"choices": ["1940", "1939", "1941"],
	"responses": ["Le Joker"]
},
{
	"id": 15,
	"image": "Batgame_21.png",
	"question": "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
	"choices": ["Oracle", "Huntress", "Black Canary"],
	"responses": []
}
];

let progress = 0;
let start = document.getElementById('start');
let game = document.getElementById('game');
let progression = document.getElementById('progression');
let question = document.getElementById('question');
let image = document.getElementById('image');
let choices = document.getElementById('choices');

function changeContent(game) {
	progress += 1;
	progression.innerHTML = progress;
	question.innerHTML = game.question;
	image.setAttribute('src', "./assets/images/game/"+ game.image);
	for(let i=0; i<game.choices.length; i++) {
		let li = document.createElement('li');
		let input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		let span = document.createElement('span');
		span.textContent = game.choices[i];
		li.appendChild(input);
		li.setAttribute('class', 'fade-in-start')
		li.appendChild(span);
		choices.appendChild(li);
	}
}

function startGame() {
	changeContent(data[progress]);
	start.style.display = 'none';
	game.style.display = 'block';
}