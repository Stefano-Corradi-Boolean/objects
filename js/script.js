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