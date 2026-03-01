import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our', 'some'];
  let adj = ['great', 'big', 'cool'];
  let noun = ['jogger', 'racoon', 'blog'];

  let domainNames = [];
  
  for(let p = 0; p < pronoun.length; p++) {
    for(let a = 0; a < adj.length; a++) {
      for(let n = 0; n < noun.length; n++) {
        console.log(pronoun[p] + adj[a] + noun[n]+'.com'); 
      }
    }
  }
}