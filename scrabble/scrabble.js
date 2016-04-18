// Sorry could not find a code folder for sublime text 3!

const dictionary = [
"achievement",
"acid",
"action",
"adventure",
"allspark",
"ammo",
"arpg",
"assassin",
"asteroid",
"autosave",
"avatar",
"avenger",
"beta",
"blade",
"blast",
"block",
"blood",
"boss",
"buff",
"bullet",
"buster",
"checkpoint",
"cheese",
"chrono",
"claptrap",
"class",
"closed",
"console",
"controller",
"cooldown",
"corruption",
"counter",
"cover",
"cpu",
"crafting",
"creed",
"crouch",
"crpg",
"cutscene",
"cutting",
"damage",
"difficulty",
"dig",
"dlc",
"dodge",
"doublejump",
"drm",
"dungeon",
"dweller",
"early",
"edge",
"emergent",
"endings",
"episodic",
"escort",
"esports",
"event",
"exclusive",
"exploit",
"explosion",
"fall",
"farm",
"farming",
"fasttravel",
"field",
"fight",
"finished",
"fireball",
"fog",
"free",
"game",
"ganon",
"gauntlet",
"gem",
"generation",
"ghost",
"god",
"gpu",
"grenade",
"griefer",
"grinding",
"gun",
"halo",
"hardmode",
"healer",
"health",
"horror",
"ifrit",
"indie",
"infinity",
"instance",
"invader",
"joystick",
"jrpg",
"jump",
"keyblade",
"keyboard",
"kill",
"lag",
"lane",
"leroy",
"level",
"lightning",
"link",
"live",
"ludology",
"mage",
"magus",
"mana",
"mario",
"masamune",
"master",
"matchmaking",
"materia",
"megaman",
"microtransactions",
"middleware",
"midgar",
"mission",
"mmorpg",
"mob",
"moba",
"mode",
"monster",
"mouse",
"mouselook",
"multiple",
"myst",
"nerf",
"nintendo",
"noob",
"npc",
"nvidia",
"openworld",
"optimus",
"overpowered",
"overshield",
"pacman",
"pass",
"pellet",
"permadeath",
"persistent",
"pickaxe",
"pierce",
"pixel",
"plasma",
"play",
"poison",
"port",
"potion",
"procedural",
"puzzle",
"pve",
"pvp",
"quest",
"quick",
"raid",
"realtime",
"replay",
"retrogaming",
"rig",
"rocket",
"roguelike",
"romance",
"rpg",
"season",
"shield",
"shoot",
"shovel",
"simulator",
"sli",
"sliding",
"smash",
"souls",
"spawn",
"speedrun",
"spread",
"sprint",
"stealth",
"strategy",
"streak",
"summon",
"super",
"survival",
"sword",
"system",
"tactics",
"tank",
"tesseract",
"theory",
"time",
"touchscreen",
"triforce",
"uppercut",
"vault",
"walljump",
"war",
"warrior",
"wasd",
"wasteland",
"world",
"zelda",
"zombie",
]

/*

PSEUDOCODE

0. Initialize highest score as 0, init wordlist as [], object with letter/score values Object ... {a: 20, b: 10}
1. Obtain list of letters
2. For each word in dictionary
	if letters provided can make word
		add word to wordlist
	2a. for each word in wordlist, check score against scrabble scores, update highest score variable
3. return highest score

subroutines

function - getLetters(numOfLetters)
function - findMatch(dictionaryWord, lettersGiven)
function - getScore(arrayOfWords)


*/

const letterScores = {
	'A': 1,
	'B': 3,
	'C': 3,
	'D': 2,
	'E': 1,
	'F': 4,
	'G': 2,
	'H': 4,
	'I': 1,
	'J': 8,
	'K': 5,
	'L': 1,
	'M': 3,
	'N': 1,
	'O': 1,
	'P': 3,
	'Q': 10,
	'R': 1,
	'S': 1,
	'T': 1,
	'U': 1,
	'V': 4,
	'W': 4,
	'X': 8,
	'Y': 4,
	'Z': 10
}

// UTLITY FUNCTIONS

function getLetters(len){
	let letters = [];
	for (let i=0; i<len; i++) {
		letters[i] = String.fromCharCode(getRandomInt(0,26) + 65); //getting random letters to work with
	}
	return letters;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function findMatch (str1, str2) {
  var found;
  var stri;
  var strj;
  var str3 = str2;
  var i;
  var j;

//iterate through dictionary word
  for (i = 0; i < str1.length; i++) {
    found = 0;
    //stri = first letter of word, second, third etc.
    stri = str1.substring(i, i + 1)
    //go through second word
    for (j = 0; j <= str3.length; j++) {
    	//strj = first letter of 2nd word, second, third
      strj = str3.substring(j, j + 1)
      //if you find a match, set a flag (found) = 1, move to next letter w/break
      //if you didn't, keep going through 2nd word to find a match
      if (stri === strj) {
      	str3 = str3.replace(strj, '') // make sure not to repeat used letter, have to change string of letters we have
        found = 1;
        break;
      }
    }
    if (found !== 1) {
      return i;
    }
  }
  // "i" will === how many letters you found, so as long as i === length of str1, found a match!
  return i;
}

// FINDING WORDS & SCORES

let score = 0;
let wordList = [];
let numChar = 7; // # of tiles in a scrabble game
let letterStore = getLetters(numChar).join('');

// check each word in dictionary, see if we can make that word with our letters
dictionary.forEach(function(word){
	if (findMatch(word.toUpperCase(), letterStore) === word.length) {
		wordList.push(word); // add it to our array
	}
})

// find all the scores
function highestScore(arr) {
	arr.forEach(function(word){
		let wordScore = 0;
		word.split('').forEach(function(letter){
			wordScore += letterScores[letter.toUpperCase()]
		})
		score = wordScore > score ? wordScore : score;
	})
}

// execute function on our array of words to return highest score
highestScore(wordList)
