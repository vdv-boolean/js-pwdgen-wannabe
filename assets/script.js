// Welcome message
alert("Benvenuto, adesso genererò una password per te per niente sicura!")

// Ask for user name
const name = prompt("Prima di iniziare, qual è il tuo nome?");

// Ask for user lastname
const lastName = prompt("Benissimo," + name + "! Dimmi anche il tuo cognome!");

// Ask for user favourite color
const favColor = prompt("Grazie," + name + "! Come ultima cosa vorrei sapere il tuo colore preferito!");

// Get the password string
let genPW = name + lastName + favColor + 23;

//Print generated password on html
document.getElementById("result").innerHTML = `${genPW}`