const BANK = [
  { tag:"MCD", q:"Que veut dire MCD ? Quelles informations permet-il de découvrir ?", a:[
    "Modèle Conceptuel de Données : entités, propriétés, associations, cardinalités",
    "Modèle de Calcul des Données : algorithmes et complexité",
    "Méthode de Conception Dynamique : architecture logicielle uniquement"
  ], c:0, exp:"MCD = Modèle Conceptuel de Données : décrit les données du SI (entités, propriétés, associations, cardinalités)." },

  { tag:"Agile", q:"Quels sont les quatre valeurs des méthodes Agiles ?", a:[
    "Individus et interactions, logiciel fonctionnel, collaboration client, adaptation au changement",
    "Processus et outils, documentation complète, contrat, plan fixe",
    "Qualité, coût, délai, performance"
  ], c:0, exp:"Valeurs Agile : individus/interactions, logiciel fonctionnel, collaboration client, adaptation au changement." },

  { tag:"Agile", q:"Quels sont les trois piliers de l’Agilité ?", a:[
    "Transparence, inspection, adaptation",
    "Planification, exécution, livraison",
    "Analyse, conception, développement"
  ], c:0, exp:"Les 3 piliers : Transparence, Inspection, Adaptation." },

  { tag:"Agile", q:"Quels paramètres du projet sont fixés en Agile, lesquels sont variables ?", a:[
    "Fixés : temps, coût, équipe • Variable : périmètre fonctionnel",
    "Fixé : périmètre • Variables : temps et coût",
    "Fixés : qualité et périmètre • Variables : équipe"
  ], c:0, exp:"En Agile on fixe temps/coût/équipe et on fait varier le périmètre selon la valeur." },

  { tag:"Agile", q:"Que signifie « Itératives et Incrémentales » en Agile ?", a:[
    "Itératif = cycles répétés • Incrémental = chaque cycle ajoute une partie fonctionnelle",
    "Itératif = une seule phase • Incrémental = aucun changement possible",
    "Itératif = sans retour • Incrémental = tout livré à la fin"
  ], c:0, exp:"Itératif : cycles. Incrémental : chaque cycle apporte un incrément fonctionnel." },

  { tag:"Scrum", q:"Citer les cinq évènements Scrum.", a:[
    "Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective",
    "Backlog Refinement, Gantt Meeting, QA Review, Delivery, Maintenance",
    "Analyse, Conception, Développement, Tests, Mise en production"
  ], c:0, exp:"Évènements : Sprint, Planning, Daily Scrum, Review, Retrospective." },

  { tag:"Scrum", q:"Citer les trois artefacts Scrum.", a:[
    "Product Backlog, Sprint Backlog, Increment",
    "Diagramme de Gantt, Cahier des charges, Rapport de tests",
    "MCD, MRD, MPD"
  ], c:0, exp:"Artefacts : Product Backlog, Sprint Backlog, Increment." },

  { tag:"Scrum", q:"Dans Scrum, qu’est-ce que le Product Backlog ?", a:[
    "Liste priorisée de toutes les fonctionnalités, améliorations et corrections du produit",
    "Le planning détaillé des tâches de l’équipe pour toute l’année",
    "La base de données du projet (tables + requêtes)"
  ], c:0, exp:"Product Backlog = liste priorisée de tout ce qui pourrait être fait sur le produit." },

  { tag:"Scrum", q:"Qui/que représente le Product Owner dans Scrum ? Quelles sont ses tâches ?", a:[
    "Il représente le client/utilisateurs ; il définit les besoins, priorise le Product Backlog et valide",
    "Il est le manager hiérarchique de l’équipe ; il attribue les tâches et contrôle les horaires",
    "Il écrit toutes les requêtes SQL et conçoit la base"
  ], c:0, exp:"Le Product Owner porte la voix du client : besoins, priorisation, validation." },

  { tag:"Scrum", q:"Dans Scrum, qu’est-ce que le Scrum Master ? Quelles sont ses tâches ?", a:[
    "Garant de Scrum ; il facilite le travail et enlève les obstacles",
    "Chef de projet ; il décide et valide le code",
    "Responsable base de données ; il gère les index et sauvegardes"
  ], c:0, exp:"Le Scrum Master facilite et s’assure que Scrum est bien appliqué." },

  { tag:"Scrum", q:"Dans Scrum, qu’est-ce qu’un Sprint ? Quels en sont les évènements principaux ?", a:[
    "Itération à durée fixe ; Planning, Daily Scrum, Review, Retrospective",
    "Phase unique de tests ; uniquement Review et validation finale",
    "Livraison finale du produit ; pas d’évènements"
  ], c:0, exp:"Un Sprint est une itération timeboxée avec Planning, Daily, Review, Retro." },

  { tag:"MCD", q:"Donner la définition et le formalisme du concept d’entité.", a:[
    "Objet à existence propre ; nom commun en MAJUSCULES",
    "Lien entre entités ; verbe à l’infinitif",
    "Valeur minimale 0 ou 1"
  ], c:0, exp:"Une entité est un objet ayant une existence propre, nommé en majuscules." },

  { tag:"MCD", q:"Donner la définition du concept de propriété.", a:[
    "Donnée élémentaire décrivant une entité ou une association",
    "Identifiant unique d’une table",
    "Lien entre deux clés étrangères"
  ], c:0, exp:"Une propriété est une donnée élémentaire d’une entité ou d’une association." },

  { tag:"MCD", q:"Donner la définition et le formalisme du concept d’association.", a:[
    "Lien entre entités ; nom généralement un verbe à l’infinitif",
    "Table relationnelle ; nom en minuscules",
    "Clé primaire composite ; plusieurs attributs"
  ], c:0, exp:"Une association exprime un lien entre entités ; souvent un verbe à l’infinitif." },

  { tag:"MCD", q:"Donner la définition et le formalisme du concept d’identifiant d’entité. Quelles en sont les propriétés ?", a:[
    "Attribut(s) qui identifie(nt) une occurrence de façon unique : unique, non nul, stable, souvent numérique",
    "Attribut facultatif pouvant être dupliqué et NULL",
    "Verbe reliant deux entités"
  ], c:0, exp:"Un identifiant d’entité distingue univoquement les occurrences ; unique, non NULL, stable." },

  { tag:"MCD", q:"Donner la définition du concept d’identifiant d’association. Quelles en sont les propriétés ?", a:[
    "Union des identifiants des entités participant à l’association",
    "Numéro auto-incrémenté obligatoire sans rapport avec les entités",
    "Contrainte de domaine (type, intervalle)"
  ], c:0, exp:"L’identifiant d’une association est formé par l’union des identifiants des entités liées." },

  { tag:"Normalisation", q:"Donner les règles à respecter pour qu’un schéma soit en 1FN.", a:[
    "Valeurs atomiques, une seule valeur par propriété, dépendance fonctionnelle à l’identifiant",
    "Aucune clé étrangère, uniquement des entités fortes",
    "Les propriétés peuvent être des listes"
  ], c:0, exp:"1FN : attributs atomiques, une valeur par champ, dépendance fonctionnelle à la clé." },

  { tag:"Normalisation", q:"Donner les règles à respecter pour qu’un schéma soit en 2FN.", a:[
    "Être en 1FN et toute propriété dépend de l’entièreté de l’identifiant",
    "Être en 3FN et ajouter des index",
    "Avoir une seule table pour tout"
  ], c:0, exp:"2FN : 1FN + pas de dépendance partielle à une partie de clé (clé composite)." },

  { tag:"Normalisation", q:"Donner les règles à respecter pour qu’un schéma soit en 3FN.", a:[
    "Être en 2FN et aucune propriété ne dépend d’une autre propriété non identifiante",
    "Être en 1FN et autoriser des valeurs multiples",
    "Avoir uniquement des clés étrangères"
  ], c:0, exp:"3FN : 2FN + pas de dépendance transitive via un attribut non-clé." },

  { tag:"Cardinalités", q:"Donner la définition du concept de cardinalité.", a:[
    "Nombre de fois qu’une entité participe à une association",
    "Nombre de tables dans une base",
    "Nombre d’attributs d’une clé primaire"
  ], c:0, exp:"La cardinalité exprime le nombre de participations d’une entité à une association." },

  { tag:"Cardinalités", q:"Donner la définition du concept de cardinalité minimale.", a:[
    "Nombre minimum de participations possibles (0 ou 1)",
    "Nombre maximum de participations possibles (1 ou N)",
    "Toujours égal à N"
  ], c:0, exp:"Cardinalité minimale : 0 (optionnel) ou 1 (obligatoire)." },

  { tag:"Cardinalités", q:"Donner la définition du concept de cardinalité maximale.", a:[
    "Nombre maximum de participations possibles (1 ou N)",
    "Nombre minimum de participations possibles (0 ou 1)",
    "Toujours égal à 0"
  ], c:0, exp:"Cardinalité maximale : 1 (au plus une fois) ou N (plusieurs fois)." },

  { tag:"MRD", q:"Que devient une entité dans le modèle relationnel ? Quel en est le formalisme ?", a:[
    "Une table relationnelle : TABLE(attributs)",
    "Une association : VERBE(entités)",
    "Un index : INDEX(champs)"
  ], c:0, exp:"Une entité devient une table relationnelle : NOMTABLE(attributs)." },

  { tag:"Clés", q:"Donner la définition de clé primaire. Quel en est le formalisme ? Quelles en sont les propriétés ?", a:[
    "Attribut(s) identifiant de manière unique un tuple ; unique et non nul",
    "Attribut(s) pouvant être dupliqué(s) et NULL",
    "Attribut(s) calculé(s) à chaque requête"
  ], c:0, exp:"Clé primaire : identifie un tuple de manière unique ; unique et NOT NULL." },

  { tag:"Clés", q:"Donner la définition de clé étrangère. Quel en est le formalisme ? Quelles en sont les propriétés ?", a:[
    "Attribut faisant référence à une clé primaire d’une autre table",
    "Attribut unique obligatoire qui identifie la table",
    "Attribut stockant une liste de valeurs"
  ], c:0, exp:"Clé étrangère : référence une clé primaire d’une autre table." },

  { tag:"Clés", q:"Donner la définition de clé primaire composite. Quel en est le formalisme ? Quelles en sont les propriétés ?", a:[
    "Clé primaire composée de plusieurs attributs",
    "Clé étrangère composée de plusieurs tables",
    "Clé primaire toujours à 1 seul attribut"
  ], c:0, exp:"Clé primaire composite : plusieurs attributs pour identifier un tuple." },

  { tag:"MRD", q:"Que devient une association plusieurs à plusieurs dans le modèle relationnel ?", a:[
    "Une table associative contenant les clés des deux entités",
    "Une clé étrangère dans la table du côté N",
    "Fusion des deux tables en une seule"
  ], c:0, exp:"Association N–M : table associative (FK vers chaque entité, souvent PK composite)." },

  { tag:"MRD", q:"Que devient une association porteuse de propriétés dans le modèle relationnel ?", a:[
    "Une table contenant les clés étrangères et les propriétés de l’association",
    "On met les propriétés dans une entité au hasard",
    "On supprime les propriétés"
  ], c:0, exp:"Association avec attributs : table associative (FK + attributs de l’association)." },

  { tag:"MRD", q:"Que devient une association un à plusieurs dans le modèle relationnel ?", a:[
    "La clé étrangère est placée dans la table du côté N",
    "Une table associative obligatoire",
    "La clé étrangère est placée dans la table du côté 1"
  ], c:0, exp:"Association 1–N : FK du côté N qui référence la PK du côté 1." },

  { tag:"MRD", q:"Que devient une association un à un dans le modèle relationnel ?", a:[
    "La clé étrangère est placée du côté optionnel",
    "Une table associative obligatoire dans tous les cas",
    "Deux clés étrangères croisées obligatoires"
  ], c:0, exp:"Association 1–1 : FK placée du côté optionnel." },

  { tag:"Intégrité", q:"Définir l’intégrité d’entité.", a:[
    "La clé primaire doit être unique et non nulle",
    "Les clés étrangères doivent être indexées",
    "Toutes les colonnes doivent être NULL"
  ], c:0, exp:"Intégrité d’entité : PK unique et NOT NULL." },

  { tag:"Intégrité", q:"Définir l’intégrité de domaine.", a:[
    "Les valeurs doivent respecter le domaine défini pour chaque attribut",
    "Toute table doit avoir deux clés primaires",
    "Les clés étrangères peuvent contenir n’importe quelle valeur"
  ], c:0, exp:"Intégrité de domaine : respect des types et contraintes (valeurs autorisées)." },

  { tag:"Intégrité", q:"Définir l’intégrité référentielle.", a:[
    "Toute clé étrangère doit référencer une clé primaire existante ou être NULL",
    "Toute clé primaire doit être une chaîne",
    "Toutes les tables doivent être en 3FN"
  ], c:0, exp:"Intégrité référentielle : une FK pointe vers une PK existante (ou NULL si autorisé)." }
];

function shuffle(array){
  const a = array.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function escapeHtml(s){
  return s
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

let order = [];
let idx = 0;
let score = 0;
let streak = 0;
let answered = false;
let selected = null;
let wrongIds = new Set();
let modeReviewWrong = false;

let shuffledChoices = [];
let correctChoiceIndex = 0;

const quizArea = document.getElementById("quizArea");
const endScreen = document.getElementById("endScreen");
const qText = document.getElementById("qText");
const qIndex = document.getElementById("qIndex");
const qTag = document.getElementById("qTag");
const choicesEl = document.getElementById("choices");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progressBar");

const pillCount = document.getElementById("pillCount");
const pillScore = document.getElementById("pillScore");
const pillStreak = document.getElementById("pillStreak");

const resetBtn = document.getElementById("resetBtn");
const restartBtn = document.getElementById("restartBtn");
const reviewWrongBtn = document.getElementById("reviewWrongBtn");
const endSummary = document.getElementById("endSummary");
const loopToggle = document.getElementById("loopToggle");

function showQuiz(){
  quizArea.style.display = "block";
  endScreen.classList.remove("show");
}

function showEnd(){
  quizArea.style.display = "none";
  endScreen.classList.add("show");
}

function updatePills(){
  const total = order.length || 33;
  pillCount.textContent = `${Math.min(idx+1,total)}/${total}`;
  pillScore.textContent = `${score}`;
  pillStreak.textContent = `${streak}`;
}

function setProgress(){
  const total = order.length || 1;
  const pct = Math.round((idx / total) * 100);
  progressBar.style.width = `${pct}%`;
}

function currentItem(){
  const bankId = order[idx];
  return { bankId, item: BANK[bankId] };
}

function renderQuestion(){
  answered = false;
  selected = null;
  feedback.className = "feedback";
  feedback.innerHTML = "";
  feedback.classList.remove("show");
  nextBtn.disabled = true;
  checkBtn.disabled = false;

  const total = order.length;
  const { item } = currentItem();

  qIndex.textContent = `Question ${idx+1} / ${total}`;
  qTag.textContent = item.tag;
  qText.textContent = item.q;

  const perm = shuffle([0,1,2]);
  shuffledChoices = perm.map(i => ({ text: item.a[i], origIndex: i }));
  correctChoiceIndex = perm.indexOf(item.c);

  const labels = ["A","B","C"];
  choicesEl.innerHTML = shuffledChoices.map((obj, i) => {
    const id = `choice_${i}`;
    return `
      <label class="choice" for="${id}">
        <input type="radio" name="choice" id="${id}" value="${i}" />
        <div class="label">${labels[i]}</div>
        <div class="text">${escapeHtml(obj.text)}</div>
      </label>
    `;
  }).join("");

  choicesEl.querySelectorAll('input[name="choice"]').forEach(r => {
    r.addEventListener("change", () => {
      selected = Number(r.value);
    });
  });

  updatePills();
  setProgress();
}

function checkAnswer(){
  if (answered) return;

  const { bankId, item } = currentItem();

  if (selected === null || Number.isNaN(selected)){
    feedback.className = "feedback show";
    feedback.innerHTML = `<h3>Choisis une réponse</h3><p>Sélectionne A, B ou C puis clique sur Valider.</p>`;
    return;
  }

  answered = true;
  checkBtn.disabled = true;
  nextBtn.disabled = false;

  const isGood = selected === correctChoiceIndex;

  if (isGood){
    score++;
    streak++;
    feedback.className = "feedback good show";
    feedback.innerHTML = `<h3>Correct</h3><p>${escapeHtml(item.exp)}</p>`;
  } else {
    streak = 0;
    wrongIds.add(bankId);
    const labels = ["A","B","C"];
    const goodLabel = labels[correctChoiceIndex];
    const goodText = shuffledChoices[correctChoiceIndex].text;
    feedback.className = "feedback bad show";
    feedback.innerHTML = `
      <h3>Faux</h3>
      <p><strong>Bonne réponse :</strong> ${goodLabel} — ${escapeHtml(goodText)}</p>
      <p style="margin-top:8px;">${escapeHtml(item.exp)}</p>
    `;
  }

  updatePills();
}

function nextQuestion(){
  if (!answered) return;

  idx++;
  if (idx >= order.length){
    progressBar.style.width = "100%";
    const total = order.length;
    endSummary.textContent = `Score : ${score}/${total} • Erreurs : ${wrongIds.size}`;
    showEnd();
    return;
  }

  renderQuestion();
}


function startNewRound({reviewWrong=false} = {}){
  modeReviewWrong = reviewWrong;

  const baseIds = reviewWrong ? Array.from(wrongIds) : BANK.map((_,i)=>i);

  if (reviewWrong && baseIds.length === 0){
    modeReviewWrong = false;
    order = shuffle(BANK.map((_,i)=>i));
  } else {
    order = shuffle(baseIds);
  }

  idx = 0;
  score = 0;
  streak = 0;

  showQuiz();
  renderQuestion();
}

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextQuestion);

resetBtn.addEventListener("click", () => {
  wrongIds.clear();
  startNewRound({reviewWrong:false});
});

restartBtn.addEventListener("click", () => startNewRound({reviewWrong:false}));
reviewWrongBtn.addEventListener("click", () => startNewRound({reviewWrong:true}));

window.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (key === "1" || key === "2" || key === "3"){
    const v = Number(key) - 1;
    const r = document.getElementById(`choice_${v}`);
    if (r){
      r.checked = true;
      r.dispatchEvent(new Event("change", {bubbles:true}));
    }
  }

  if (key === "enter"){
    if (!answered) checkAnswer();
    else nextQuestion();
  }

  if (key === "n"){
    if (answered) nextQuestion();
  }
});

startNewRound({reviewWrong:false});
