// @ts-check
import { Skill } from "./Modules/collections.js"


const collare = new Skill("Collare Cervicale")



const spinale = new Skill("Spinale", [])


const skillSelector = document.getElementById("#skill");
const newSkill = document.createElement("option");
const skillSpinale = document.createElement("option");
newSkill.innerHTML = collare.title;
skillSpinale.innerHTML= spinale.title;

if (skillSelector) {
    skillSelector.appendChild(newSkill);
    skillSelector.appendChild(skillSpinale)
}