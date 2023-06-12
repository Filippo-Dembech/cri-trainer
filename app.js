const selectionButton = document.getElementById("selection-button");


const collare = new Skill("Collare Cervicale")
const spinale = new Skill("Spinale", [])


const skillSelector = document.getElementById("skills");
const newSkill = document.createElement("option");
const skillSpinale = document.createElement("option");
newSkill.innerHTML = collare.title;
skillSpinale.innerHTML= spinale.title;

skillSelector.appendChild(newSkill);
skillSelector.appendChild(skillSpinale)

selectionButton.addEventListener('click', function(e) {
    e.preventDefault();
    const frontSelection = document.getElementById("front-selection");
    frontSelection.style.animation = "go-away 3s";
})











