/* Opdracht 1*/
// We hebben een array met e-mailaddressen van medewerkers. Voer nu de volgende acties uit:

const emailadresses = ['n.eeken@novi.nl', 'n.stuivenberg@novi.nl', 'm.vandergeest@novi-education.nl', 'a.wiersma@novi.nl'];

// 1a. Onze nieuwe medewerker Melissa moet worden toegevoegd aan de lijst met emailadressen. Haar email is: m.westerbroek@novi.nl

emailadresses.push('m.westerbroek@novi.nl');
console.log(emailadresses);

// 1b. Jouw collega wil weten of het emailadres van Nick Stuivenberg in de lijst staat. Zoek dit voor hem uit. (dus: bevat onze array n.stuivenberg@novi.nl?)

console.log(emailadresses.includes('n.stuivenberg@novi.nl'));

// 1c. Collega's staan in de emaillijst op volgorde waarin ze bij Novi zijn komen werken. Nu blijkt echter dat een andere collega, Tess,
// bij Novi is komen werken VOOR Melissa. Haar e-mailadres moet dus worden toegevoegd op de één na laatste plek: t.mellink@novi.nl

emailadresses.splice(emailadresses.length - 1, 0, 't.mellink@novi.nl');
console.log(emailadresses);


// 1d. Er staat een foutje in de lijst. Het emailadres van Mitchel moet worden aangepast naar m.vandergeest@novi.nl, maar je weet niet
// op welke plek in de lijst dit emailadres staat. Dit gebeurt helaas wel vaker. Schrijf een functie die drie parameters verwacht:
// een array met emailadressen, het oude emailadres dat vervangen moet worden, en het nieuwe emailadres.
// Deze functie achterhaalt het indexnummer van het oude emailadres en vervangt dit vervolgens voor het nieuwe adres.
// TIP: schrijf 'm eerst zoals je hem zou toepassen op bovenstaande array en schrijf die code dan om naar een functie

const replaceAddress = (addressList, oldAddress, newAddress) => {
    const index = addressList.indexOf(oldAddress);
    if (~index) { // .indexOf() returnt -1 als oldAddress niet gevonden kan worden, de bitwise NOT operator (~) maakt daar 0 van, wat falsy is.
        addressList[index] = newAddress;
    }
}

replaceAddress(emailadresses, 'm.vandergeest@novi-education.nl', 'm.vandergeest@novi.nl');
console.log(emailadresses);