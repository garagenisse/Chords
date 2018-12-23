
// https://en.wikipedia.org/wiki/Chord_names_and_symbols_(popular_music)

var keysDictionary = ["c", "db", "d", "eb", "e", "f", "gb", "g", "ab", "a", "bb", "b"];

var chordDictionary = {
	major: [0, 4, 7],
	minor: [0, 3, 7],
	seventh: [0,4,7,10],
	majorseventh: [0,4,7,11],
	minormajorseventh: [0,3,7,11],
	minorseventh: [0,3,7,10]
};

function play() {

	// Clear all classes
	$('li.play').removeClass('play root');

	// Get the key
	var keys = document.querySelectorAll('input[name="key"]:checked');

	// Get random key of checked keys
	var randomKeyName = keys[Math.floor(Math.random() * keys.length)].value;

	// Get the chords
	var chords = document.querySelectorAll('input[name="chord"]:checked');

	// Get random chord of the selected ones
	var randomChordName = chords[Math.floor(Math.random() * chords.length)].value;

	// Get offset in notes for the choosen key
	var keyIndex = keysDictionary.indexOf(randomKeyName);

	// Get notes of chord
	var notes = chordDictionary[randomChordName];
	notes.map((n, ix) => {
		var note = keysDictionary[(n + keyIndex) % keysDictionary.length];

		// Find the li element with class of current note and add a class
		var x = document.querySelector('li.' + note + '3');
		x.classList.add("play");
		if (ix === 0) x.classList.add("root");

	});

	$("#play").text("Showing " + randomKeyName + " " + randomChordName);
}