const output = document.getElementById('output')
const listaUser = document.getElementById('listaUser')
const listaStudenti = document.getElementById('listaStudenti')
const listaStudenti2 = document.getElementById('listaStudenti2')

// object = {} -> le proprità sono all'interno delle graffe
const user = {
  // chiave: valore
  firstName: 'Ugo',
  // per avere più proprietà le si separa con la virgola
  lasName: 'De Ughi',
  hobbies:['golf', 'carling', 'cooking']
}

// leggo tutto l'oggetto
console.log(user);

// leggo una proprità
console.log(user.firstName);

// sovrascrivo una proprità
user.firstName = 'Giuseppe';
console.log(user.firstName);

console.log(user.hobbies);
// leggo cooking
console.log(user.hobbies[2]);


// ciclo l'oggetto
// ciclo for in
for(let chiave in user){
  // per leggere il valore della proprità utilizzo la chiave (dinamica) con la sintassi a quandre ossia nomeOggetto[chiaveDinamica]
  console.log(chiave);
  listaUser.innerHTML += `<li>${chiave}: ${user[chiave]}</li>`
}

// ciclo l'arry dell'oggetto con for
for(let i = 0; i < user.hobbies.length; i++){
  const hobby = user.hobbies[i];
  console.log(hobby);
}

// ciclo l'arry dell'oggetto con for of
for(let hobby of user.hobbies){
  console.log(hobby);
}

// creo una nuova propietà
user.age = 40;
console.log(user);

const libro = {
  // le proprità le posso dichiare anche con gli apici
  'titolo': 'Il Signore degli anelli',
  autore: 'JRR Tolkien',
  "pagine": 560,
  'prezzo in euro': 12,
}

libro.isbn = '736832764327'

console.log(libro);

console.log(libro.titolo);
console.log(libro['prezzo in euro']);
// le proprità si possone leggere e assegnare con la sintassi a parentesi quadre e la proprità con gli apici
console.log(libro['autore']);

output.innerHTML = libro.titolo;

const nomePropieta = 'pagine';
// per leggere una proprità dinamica devo inserirla nelle quadre senza apici
console.log(libro[nomePropieta]);



const colori = ['giallo','rosso', 'blu'];
for(let i = 0; i < colori.length; i++){
  const colore = colori[i];
  console.log(colore);
}

// ciclo for of
// inizializzo una varibile che assumerà il valore dell'elemnto del ciclo
// in questo caso non ho l'indice
for(let colore of colori){
  console.log(colore);
}

for(let i in colori){
  console.log(i);
  console.log(colori[i]);
}

// Array di oggetti
const studenti = [
  {
    firstName: 'Ugo',
    lastName: 'De Ughi',
    code: 'kjeh732',
    votes:[5, 7, 10]
  },
  {
    firstName: 'Giuseppe',
    lastName: 'Verdi',
    code: 'jsdhew88',
    votes:[6,8,10]
  },
  {
    firstName: 'Martina',
    lastName: 'Bianchi',
    code: 'kjhe7qa',
    votes:[7,10,8,6,4]
  }
]

// ciclo con for
for(let i = 0; i < studenti.length; i++){
  const studente = studenti[i];
  console.log(studente.firstName);
  console.log(studente.lastName);
}

// ciclo for of
// stampo tutte le proprità deggli oggetti dellarry
for(let studente in studenti){
  let outputStudente = '';
  for(let key in studente){
    const outputStr = `${key}: ${studente[key]}`;
    console.log(outputStr);
    outputStudente += outputStr + ' ';
  }

  listaStudenti.innerHTML += `
  <li>
    <div>
      <p>${outputStudente}</p>
    </div>
  </li>
  `
}

// stampo solo le proprietà che mi servono
for(let studente of studenti){
  listaStudenti2.innerHTML += `
  <li>
    <p>Nome: ${studente.firstName} ${studente.lastName}, maticola: ${studente.code}</p>
  </li>
  `
}

console.log(studenti[2].lastName);

const title = 'The Dark Side Of the Moon';
const artist = 'Pink Floyd';
const year = 1973;
const myPrice = '15'

// const disc = {
//   title: title,
//   artist: artist,
//   year: year
// }

// chisve dinamica
const nameKey = 'price';

// dando lo stesso nome della variabile fine assegnato sia il nome della chiave che il valore
const disc = {
  title,
  artist,
  year,
  [nameKey]: myPrice  // chiave creata dinamicamente in base al valore di una variabile
}

console.log(disc);
console.log(disc.price);
console.log(disc[nameKey]);

// Destructuring
const phone = {
  marca: 'Samsung',
  modello: 'Galaxy',
  prezzo: 300,
  peso: 100
}

// destrutturando prendo le proprità che mi oggorrono dirttamente dall'oggeto inizializzando delle variabili (let o const) che avranno la stessa chiave:valore
const {marca, modello, prezzo} = phone;

// stessa cosa con sintassi tradizionale
// const marca = phone.marca;
// const modello = phone.modello;
// const prezzo = phone.prezzo;

console.log(phone);
console.log(marca, modello, prezzo);

// lo spread ...mioOggetto viene usate per clonare tutte le proprità di un oggetto in un nuvo oggetto
const newPhone = {...phone, colore: 'blu'};
console.log(newPhone);
newPhone.peso = '100 gr';
console.log(newPhone);
console.log(phone);

const coloriBelli = ['giallo', 'verdoe', 'blu'];
const nuovoColoriBelli = ['viola', ...coloriBelli, 'arancione', 'bianco']
console.log(coloriBelli);
console.log(nuovoColoriBelli);

const database = {
  mioPhone: {...phone},
  utente: {...user},
  colori: [...nuovoColoriBelli]
}
console.log(database);

const numeriPari = [2,4,6,8]
const numeriDispari = [1,3,5,7]
const tuttiNumeri = [...numeriPari, ...numeriDispari];
console.log(tuttiNumeri);