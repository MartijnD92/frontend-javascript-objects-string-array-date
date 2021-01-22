/* Opdracht 1 */
// Schrijf een functie die de diameter van een cirkel verwacht als parameter en
// de omtrek van die cirkel bererekent en teruggeeft
// tip: PI * diameter
// ---- Verwachte uitkomsten:
// 4 geeft 12.566370614359172
// 12 geeft 37.69911184307752

const calcCircumference = (diameter) => Math.PI * diameter;
console.log(calcCircumference(4));
console.log(calcCircumference(12));

/* Opdracht 2 */
// Schrijf bovenstaande functie nogmaals, maar zorg er nu voor dat de uitkomst wordt afgerond
// ---- Verwachte uitkomsten:
// 4 geeft 13
// 12 geeft 38

const calcRoundedCircumference = (diameter) => Math.round(Math.PI * diameter);
console.log(calcRoundedCircumference(4));
console.log(calcRoundedCircumference(12));

/* Opdracht 3 */
// Schrijf een functie die het laatste karakter in een string teruggeeft
// ---- Verwachte uitkomsten:
// "vermicelli" geeft "i"
// "kroepoek" geeft "k"

const finalCharacter = (string) => string.charAt(string.length - 1);
console.log(finalCharacter('vermicelli'));
console.log(finalCharacter('kroepoek'));


/* Opdracht 4 */
// Schrijf een functie die een array maakt van alle woorden in een zin, maar wanneer er
// spaties aan het begin of einde van de zin staan, deze niet in de array zet.
// ---- Verwachte uitkomsten:
// " De pot verwijt de ketel dat hij zwart ziet" geeft ['De', 'pot', 'verwijt', 'de', 'ketel', 'dat', 'hij', 'zwart', 'ziet'];
// "Niet geschoten is altijd mis " geeft [ 'Niet', 'geschoten', 'is', 'altijd', 'mis' ];

const str1 = " De pot verwijt de ketel dat hij zwart ziet";
const str2 = "Niet geschoten is altijd mis ";

const toArray = (string) => string.trim().split(" ");
console.log(toArray(str1));
console.log(toArray(str2));


/* Opdracht 5 */
// Maak een variabele today aan en sla daar een nieuw date-object in op
// Print in de console (in nummers) in welke maand we nu zitten
// Print in de console (in nummers) welk uur van de dag het is

const today = new Date();
console.log(today.getMonth());
console.log(today.getHours());


/* BONUS OPDRACHT (als je tijd over hebt) */
// Schrijf een functie die twee strings als parameters verwacht en de langste naam teruggeeft.
// als de namen beide even lang zijn geeft hij de string "Beide namen zijn even lang" terug
// ---- Verwachte uitkomsten:
// "Nick", "Nova" geeft "Beide namen zijn even lang"
// "Mitchel", "Nick" geeft "Mitchel"

const longest = (name1, name2) => {
    if (name1.length === name2.length) {
        return "Beide namen zijn even lang";
    }
    if (name1.length > name2.length) {
        return name1;
    }
    if (name2.length > name1.length) {
        return name2;
    }
    return "Er is iets grandioos misgegaan!";
}

console.log(longest("Nick", "Nova"));
console.log(longest("Nick", "Mitchel"));
console.log(longest(1, Object));