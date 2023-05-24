class Skill {

    constructor (title, steps) {
        this.title = title;
        this.steps = steps;
    }

    getTitle() { return this.title }
    getSteps() { return this.steps }
}


collare = new Skill(
    "Collare Cervicale",
    [
        "Fai questo",
        "Fai Quello", 
        "di qua",
        "di là",
        "di giù",
        "di sù"
    ]
)

spinale = new Skill("Spinale", [])


const skillSelector = document.querySelector("#skill");
const newSkill = document.createElement("option");
const skillSpinale = document.createElement("option");
newSkill.innerHTML = collare.title;
skillSpinale.innerHTML= spinale.title;
skillSelector.appendChild(newSkill);
skillSelector.appendChild(skillSpinale)