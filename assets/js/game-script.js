const data = [
{
	"id": 1,
	"image": "Batgame_3.png",
	"illustrations": [],
	"question": "Quel est l’autre nom de l’Homme-Mystère ?",
	"choices": ["Le Sphinx", "Saphir", "Le Joker"],
	"responses": ["Le Joker"]
},
{
	"id": 2,
	"image": "Batgame_4.png",
	"illustrations": [],
	"question": "Quelle est l’ancienne profession de Harley Quinn ?",
	"choices": ["Infirmière", "Psychiatre", "Dentiste"],
	"responses": ["Psychiatre"]
},
{
	"id": 3,
	"image": "Batgame_5.png",
	"illustrations": [],
	"question": "Quel est l’objet fétiche de Double Face ?",
	"choices": ["Une pièce", "Un livre", "Un couteau"],
	"responses": ["Une pièce"]
},
{
	"id": 4,
	"image": "Batgame_6.png",
	"illustrations": [],
	"question": "Qui a produit Batman en 1966 ?",
	"choices": ["Stanley Kubrick", "William Dozie", "Peter Jackson"],
	"responses": ["William Dozie"]
},
{
	"id": 5,
	"image": "Batgame_7.png",
	"illustrations": [],
	"question": "Batman c’est aussi le nom d’une ville en...",
	"choices": ["Turquie", "Islande", "Allemagne"],
	"responses": ["Turquie"]
},
{
	"id": 6,
	"image": "Batgame_8.png",
	"illustrations": [{"img": "Batgame_9.png", "left": "4em", "top": "75%", "width": "20%"}, {"img": "Batgame_9-1.png", "left": "80%", "top": "70%", "width": "15%"}],
	"question": "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
	"choices": ["Le Pingouin", "Ra’s al Ghul", "Poison Ivy"],
	"responses": ["Ra’s al Ghul"]
},
{
	"id": 7,
	"image": "Batgame_10.png",
	"illustrations": [],
	"question": "Quelle ville Batman défend-il ?",
	"choices": ["Gotham City", "Starling City", "Hell’s Kitchen"],
	"responses": ["Gotham City"]
},
{
	"id": 8,
	"image": "Batgame_11.png",
	"illustrations": [],
	"question": "Tim Burton a réalisé deux Batman, qui jouait Batman ?",
	"choices": ["Georges Clooney", "Val Kilmer", "Mickael Keaton"],
	"responses": ["Mickael Keaton"]
},
{
	"id": 9,
	"image": "Batgame_12.png",
	"illustrations": [{"img": "Batgame_13-1.png", "left": "10%", "top": "67%", "width": "17%"}, {"img": "Batgame_13.png", "left": "70%", "top": "65%", "width": "17%"}],
	"question": "Dans son premier Batman (1989) Jack Nicholson jouait :",
	"choices": ["Le Pingouin", "L’Homme Mystère", "Le Joker"],
	"responses": ["Le Joker"]
},
{
	"id": 10,
	"image": "Batgame_14.png",
	"illustrations": [{"img": "Batgame_15.png", "left": "60%", "top": 0, "width": "20%"}, {"img": "Batgame_16.png", "left": "67%", "top": "73%", "width": "15%"}],
	"question": "Qui est Jonathan Crane ? ",
	"choices": ["L’Épouvantail", "Le Joker", "Hugo Strange"],
	"responses": ["L’Épouvantail"]
},
{
	"id": 11,
	"image": "Batgame_17.png",
	"illustrations": [],
	"question": "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
	"choices": ["Emma Watson", "Gigi Hadid", "Lola Iolani Momoa", "Zoë Kravitz"],
	"responses": ["Zoë Kravitz"]
},
{
	"id": 12,
	"image": "Batgame_18.png",
	"illustrations": [],
	"question": "Quel est le prénom des parents du jeune Bruce Wayne ?",
	"choices": ["Thomas et Martha", "Elaine et Georges", "Martha et James"],
	"responses": ["Thomas et Martha"]
},
{
	"id": 13,
	"image": "Batgame_19.png",
	"illustrations": [],
	"question": "Qui interprète le Joker en 2008 ?",
	"choices": ["Heath Legder", "Haeth Ledger", "Heath Ledger"],
	"responses": ["Heath Legder"]
},
{
	"id": 14,
	"image": "Batgame_20.png",
	"illustrations": [],
	"question": "En quelle année Robin fait il sa première apparition ?",
	"choices": ["1940", "1939", "1941"],
	"responses": ["1940"]
},
{
	"id": 15,
	"image": "Batgame_21.png",
	"illustrations": [],
	"question": "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
	"choices": ["Oracle", "Huntress", "Black Canary"],
	"responses": ["Huntress"]
}
];

let progress = 0;
let start = document.getElementById('start');
let game = document.getElementById('game');
let progression = document.getElementById('progression');
let question = document.getElementById('question');
let imageContent = document.getElementById('image');
let choices = document.getElementById('choices');
let illustrations = document.getElementById('illustrations');
let userResponses = [];
let formRes = document.getElementById('form-res');
let popupE = document.querySelector(".popup-error");
// POP UP
let popupTitle = document.getElementById('popup-title');
let popupMessage = document.getElementById('popup-message');
let restartQuiz = document.getElementById('restart-quiz');

function changeContent(game) {
	// DELETE ALL PREVIOUS ELEMENTS
	choices.innerHTML = "";
	imageContent.innerHTML = "";
	illustrations.innerHTML = "";
	// CHANGE THE VALUE OF PROGRESS TO CURRENT PROGRESS
	progression.innerHTML = progress + 1;
	// CHANGE THE VALUE OF QUESTION TO CURRENT QUESTION
	question.innerHTML = game.question;
	// CREATE IMAGE ELEMENT
	let image = document.createElement('img');
	// SET STYLES AND SOURCE FOR IMAGE
	image.style.opacity = '0';
  image.style.transform = 'scale(0)';
  image.style.transition = 'opacity 3s ease, transform 3s ease';
  imageContent.appendChild(image);
	image.setAttribute('src', "./assets/images/game/"+ game.image);
	// DEFINE IMAGE ANIMATION
	setTimeout(() => {
  	// Modifier les styles pour l'effet fade-zoom
  	image.style.opacity = '1';
  	image.style.transform = 'scale(1)';
	}, 100);
	for(let i=0; i<game.choices.length; i++) {
		let li = document.createElement('li');
		let input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('name', game.choices[i]);
		input.addEventListener('change', function(event) {
  		event.stopPropagation(); // Arrête la propagation de l'événement de la case à cocher
  		input.checked = !input.checked;
		});
		let span = document.createElement('span');
		span.textContent = game.choices[i];
		li.appendChild(input);
		li.setAttribute('class', 'fade-in-right cursor-pointer')
		li.appendChild(span);
		li.addEventListener('click', ()=>{
			input.checked = !input.checked;
		});
		choices.appendChild(li);
	}
	for(let i=0; i<game.illustrations.length; i++) {
		let ill = document.createElement('img');
		ill.setAttribute('src', "./assets/images/game/"+ game.illustrations[i].img);
		ill.style.position = 'absolute';
		ill.style.left = game.illustrations[i].left;
		ill.style.top = game.illustrations[i].top;
		ill.style.width = game.illustrations[i].width;
		ill.style.opacity = '0';
  	ill.style.transform = 'scale(0)';
  	ill.style.transition = 'opacity 3s ease, transform 3s ease';
  	setTimeout(() => {
  		// Modifier les styles pour l'effet fade-zoom
  		ill.style.opacity = '1';
  		ill.style.transform = 'scale(1)';
		}, 100);
		illustrations.appendChild(ill);
	}
	progress += 1;
}

function startGame() {
	changeContent(data[progress]);
	start.style.display = 'none';
	game.style.display = 'block';
}

restartQuiz.addEventListener('click', ()=> {
	popupE.style.display = 'none';
	start.style.display = 'block';
	game.style.display = "none";
	progress = 0;
	userResponses = [];
});

function showPopup(t, m) {
	popupE.style.display = 'block';
	popupTitle.innerHTML = t;
	popupMessage.innerHTML = m;
}

function verifyAnswers() {
	let res = true;
	for(let i=0; i<userResponses.length; i++) {
		if (userResponses[i].responses[0] !== data[i].responses[0]) {
			res = false;
			console.log('I M FALSE')
			break;
		}
	}
	return res;
}

function next() {
	const checkboxes = formRes.querySelectorAll('input[type="checkbox"]:checked');
	const checkedNames = Array.from(checkboxes).map(checkbox => checkbox.name);
	userResponses.push({'id': progress, 'responses': checkedNames});
	if(!verifyAnswers()) {
		if (progress < 6){
			showPopup(progress +"/15 C'EST PAS TOUT A FAIT CA...", "Oula, Heuresement que le Riddler est sous les verrous.. Il faut que vous vous repassiez les films, cette fois en enlevant peut-être le masque qui vous a bloqué la vue ! Aller, rien n'est perdu");
		} else if (progress < 11){
			showPopup(progress +"/15 PAS MAL !", "Encore un peu d'entrainement avec le Chevalier Noir vous serait benefique, mais vous pouvez marcher la tete haute de vos connaissances sont la. A vous de les consolider, foncez Gotham est votre terrain de chasse !");
		} else {
			showPopup(progress +"/15 PRESQUE !", "Vous y etiez presque ! Ne baissez pas le bras... Encore un peu d'effort et vous y arriverez!");
		}
	} else {
		if (progress === 15) {
			showPopup(progress +"/15 PAS MAL !", "Vous etes veritablement un super fan de l'univers Batman! <br> Comics, films, rien ne vous echappe. Bruce Wayne a de quoi etre fier, Gotham est en paix et Batman peut prendre sa retraite, vous veillez aux grains");
		}
	}
	changeContent(data[progress]);
}