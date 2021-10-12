let verbs = ['deserve', "flap", "strip", "sack", 'stretch', 'knock', 'trade', 'beam', 'license', 'scrub'];
let nouns = ['Nail',  'Parent',  'Kittens',  'Sound',  'Market',  'Bike',  'History',  'Indication',  'Requirement ', 'Knife' ];
let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
combine = () => {
let randomPhrase = randomNoun +' ' + randomVerb;
return randomPhrase;
};
console.log(combine());