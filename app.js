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
    const frontSection = document.getElementById("front-section");
    const exerciseSection = document.getElementById("exercise-section")
    frontSection.style.animation = "go-out 3s";
    frontSection.style.animationFillMode = "forwards";
    exerciseSection.style.animationPlayState = "running";

})











