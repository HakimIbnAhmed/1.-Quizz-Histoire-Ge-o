const form = document.querySelector(".form-quizz");

let arrayResults = [];
const responses = ["c", "a", "b", "b", "c"];
const help = document.querySelector(".aide");
const note = document.querySelector(".note");
const textResults = document.querySelector(".results h3");
const styleResults = document.querySelector(".results");
const allQuestions = document.querySelectorAll(".question-block");
let arrayChecked = [];

// les réponses validées sont stockées lorsque l'utilisateur a cliqué sur 'valider'
form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (i = 1; i < 6; i++) {
    arrayResults.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  verifStep(arrayResults);
  arrayResults = [];
});
// chaque réponse est triée 'true' ou 'false' dans un tableau
function verifStep(arrToCheck) {
  for (j = 0; j < 5; j++) {
    if (arrToCheck[j] === responses[j]) {
      arrayChecked.push(true);
    } else {
      arrayChecked.push(false);
    }
  }
  nbFaults(arrayChecked);
  colorBlocks(arrayChecked);
  arrayChecked = [];
}

// résultat dans le block 'results' en pied de page + commentaire + changement couleur background
function nbFaults(arrayToCheck) {
  const numberOfFaults = arrayToCheck.filter((el) => el !== true).length;

  switch (numberOfFaults) {
    case 0:
      textResults.innerText = "💥🏆 C'EST UN SANS-FAUTE !!! 🏆💥";
      styleResults.style.background = "#9bff80";
      help.innerText = "T'es un crack";
      note.innerText = " 5 / 5 ";
      break;

    case 1:
      textResults.innerText = "🥈 TU Y ES PRESQUE 🥈";
      help.innerText = " Corrige tes fautes dans les cases rouges et réessaye ";
      styleResults.style.background = "#F08080";
      note.innerText = " 4 / 5 ";
      break;

    case 2:
      textResults.innerText = "🟠 C'EST PAS FAMEUX 🟠";
      help.innerText = " Corrige tes fautes dans les cases rouges et réessaye ";
      styleResults.style.background = "#F08080";
      note.innerText = " 3 / 5 ";
      break;

    case 3:
      textResults.innerText = "❌ TA CULTURE GÉNÉRALE EST MÉDIOCRE ❌";
      help.innerText = " Corrige tes fautes dans les cases rouges et réessaye ";
      styleResults.style.background = "#F08080";
      note.innerText = " 2 / 5 ";
      break;

    case 4:
      textResults.innerText = "📛 C'EST LAMENTABLE 📛";
      help.innerText = " Corrige tes fautes dans les cases rouges et réessaye ";
      styleResults.style.background = "#F08080";
      note.innerText = " 4 / 5 ";
      break;

    case 5:
      textResults.innerText = "🆘 NULLISSIME 🆘";
      help.innerText = " Corrige tes fautes dans les cases rouges et réessaye ";
      styleResults.style.background = "#F08080";
      note.innerText = " 4 / 5 ";
      break;

    default:
      textResults.innerText = "🚧 UNE ERREUR EST SURVENUE 🚧";
      help.innerText = "";
      styleResults.style.background = "#FF8C00";
      note.innerText = "";
  }
}

// couleur background de chaque block selon la réponse
function colorBlocks(arrayToCheck) {
  for (let j = 0; j < arrayToCheck.length; j++) {
    if (arrayToCheck[j] == true) {
      allQuestions[j].style.background = "#9bff80";
    } else {
      allQuestions[j].style.background = "#FF8C00";
      allQuestions[j].classList.add("echec");
    }

    setTimeout(() => allQuestions[j].classList.remove("echec"), 500);
  }
}

// Lorsque l'utilisateur corrige les réponses fausses, le background redevient blanc
allQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.background = "#FFF";
  });
});
