//random time generator
//generate a random hour
var randomHr = Math.floor(Math.random() * 12 + 1);
//generate a random minute
function randomMin(min, max) {
	min = Math.ceil(10);
	max = Math.floor(59);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generate random AM/PM
var ampm = ["AM", "PM"];
function randomAMPM(ampm) {
	return ampm[Math.floor(Math.random() * ampm.length)];
}

//output random time
randomHHMM.textContent = `${randomHr}:${randomMin(10, 59)} ${randomAMPM(ampm)}`;

//random name generator
//array of random names
var contacts = [
	"Marquitta",
	"Norine",
	"Kelvin",
	"Fidela",
	"Meaghan",
	"Jenell",
	"Janita",
	"Tracy",
	"Fiona",
	"Alta",
	"Dovie",
	"Wilhemina",
	"Harley",
	"Freeda",
	"Isis",
	"Deidre",
	"Maryellen",
	"Liberty",
	"Latrisha",
	"Jeramy",
	"Ebony",
	"Shalon",
	"Yessenia",
	"Isreal",
	"Aundrea",
	"Mica",
	"Maybell",
	"Christal",
	"Shakia",
	"Ali",
	"Keira",
	"Hanh",
	"Graham",
	"Kathi",
	"Heath",
	"Felipe",
	"Buck",
	"Hermine",
	"Saundra",
	"Giuseppe",
	"Anette",
	"Lauri",
	"Lillian",
	"Hana",
	"Raye",
	"Azzie",
	"Ginny",
	"Jonathon",
	"Eleonora",
	"Avis",
];
//function to generate random name
function randomName(contacts) {
	return contacts[Math.floor(Math.random() * contacts.length)];
}
//output a random name
contact.innerHTML = randomName(contacts);
