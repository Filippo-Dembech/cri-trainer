// @ts-check

const collare = new Skill("Collare Cervicale")



const spinale = new Skill("Spinale", [])


const skillSelector = document.getElementById("skills");
const newSkill = document.createElement("option");
const skillSpinale = document.createElement("option");
newSkill.innerHTML = collare.title;
skillSpinale.innerHTML= spinale.title;

console.log(skillSelector);
if (skillSelector) {
    skillSelector.appendChild(newSkill);
    skillSelector.appendChild(skillSpinale)
}