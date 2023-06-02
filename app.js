// @ts-check

class Skill {

    /**
     * Title of the `Skill`
     * @type {string} 
     */
    #title;

    /**
     * Array of strings representing the steps of the `Skill`
     * @type {Array<string>}
     */
    #steps;

    /**
     * @constructor
     * @param {string} title - Title of the `Skill`
     * @param {Array<string>} [steps] - Array of strings defining the steps of the `Skill` 
     */
    constructor (title, steps=[]) {
        this.#title = title;
        this.#steps = steps;
    }

    get title() { return this.#title }
    get steps() { return this.#steps }

    set title(title) { this.#title = title }
    set steps(steps) { this.#steps = steps }

}


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