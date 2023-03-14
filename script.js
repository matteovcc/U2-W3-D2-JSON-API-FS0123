let save = document.getElementById("save-btn");
let input = document.getElementById("field");
let remove = document.getElementById("remove-btn");

save.onclick = () => {
  let fieldValue = document.getElementById("field-value");
  fieldValue.innerText = input.value;
  localStorage.setItem("field", input.value);
};

remove.onclick = () => {
  localStorage.removeItem("field", input.value);
};



// prova 2

// let counterValue = parseInt(sessionStorage.getItem("counter")) || 0;

// let counter = document.getElementById("counter");
// let start = document.getElementById("start");

// counter.textContent = counterValue;

// let interval;
// start.onclick = () => {
//   interval = setInterval(() => {
//     counterValue += 1;
//     counter.textContent = counterValue + "  secondi";
//     sessionStorage.setItem("counter", counterValue);
//   }, 1000);
// };

//prova 3

let counterValue = parseInt(sessionStorage.getItem("counter")) || 0;

let interval;

const update = () => {
  interval.innerText = `${counterValue} secondi`;
};

window.onload = () => {
  interval = document.getElementById("counter");
  update();

  const start = document.getElementById("start");
  start.onclick = () => {
    interval = setInterval(() => {
      counterValue += 1;
      counter.textContent = `${counterValue} secondi`;
      sessionStorage.setItem("counter", counterValue);
    }, 1000);
  };
};

// prova 4

// let counter = parseInt(sessionStorage.getItem("counterValue")) || 0;
// let p;
// const update = () =>{
//   p.innerText = counter;
// }
// window.onload = () => {
//   p = document.getElementById("counter");
//   update();
//   let increment = document.getElementById("start")
//   increment.onclick = incrementCounter;
// }

// const incrementCounter = () => {
//   counterValue+=1
//   update()
//   sessionStorage.setItem("counterValue", counterValue)
// }

// Esempio Michele

// let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;
// // controllo la presenza di un valore di "lastCounterValue" ad ogni caricamento della pagina,
// // se non presente assegnerò 0 come valore di default,
// // se presente userò il valore di "lastCounterValue" convertito in numero (per evitare concatenazioni di stringhe)

// let paragraph;

// // funzione che aggiorna il valore del counter nel paragrafo
// const updateCounterInDOM = () => {
//   paragraph.innerText = counterValue;
// };

// window.onload = () => {
//   paragraph = document.getElementById("counter");
//   updateCounterInDOM(); // assegna 0 al primo caricamento della pagina, sarebbe vuoto altrimenti

//   // prendo la referenza del bottone e gli attacco la funzione incrementCounter all'onclick
//   const incrButton = document.getElementById("incrementButton");
//   incrButton.onclick = incrementCounter;
// };

// const incrementCounter = () => {
//   // counterValue = counterValue + 1
//   //   counterValue++;
//   counterValue += 1;

//   updateCounterInDOM(); // aggiorno la pagina successivamente all'incrementazione del valore
//   sessionStorage.setItem("lastCounterValue", counterValue); // mantengo sincronizzato lo storage col cambiamento appena avvenuto sul counterValue
//   // ora interfaccia e storage sono sincronizzati e aggiornati con il valore attuale
// };
