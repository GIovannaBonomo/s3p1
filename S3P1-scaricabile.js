/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*    let num1 = parseInt(prompt("inserisci il primo valore")) 
      let num2 = parseInt(prompt("inserisci il secondo valore"))
      function crazySum (a,b){
      if (a===b){
      return (a+b)*3}
      return (a+b)}
      console.log (crazySum(num1,num2))
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*
  let numeroIntero = parseInt(prompt("inserisci il numero intero"))    
  function boundary (a) {
     if ((a>=20 && a<=100) || a===400){
    return true;
    } else {
      return false;
    }
    } 
    console.log (boundary(numeroIntero));
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* 
  reverseString("Epicode")
  function reverseString (parola)
  {
    let contrario = parola.split("").reverse().join("")
    console.log(contrario)
  }
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
let frase = prompt("scrivi qui la frase")
    function upperFirst (parola){
      let parole = parola.split(" ")
      let fraseMaiusc = parole.map(parola=>{
        return parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase();
      });
       return fraseMaiusc.join(" ")
    }
    console.log (upperFirst(frase))
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*  let parametro = parseInt(prompt("inserisci qui il numero"))
      function giveMeRandom (n) {
        let numero = []
        for (let i = 0; i < n; i++) {
         numero.push(Math.floor(Math.random() * 11));
      }
      return numero;
    } console.log (giveMeRandom(parametro)) */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* 
  let base = parseInt(prompt ("scrivi il valore di base"))
  let altezza = parseInt(prompt ("scrivi il valore di altezza"))
    function area (l1,l2){
      return (l1*l2)
    } 
  console.log(area(base,altezza))
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
