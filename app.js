// ============= UTILITY CLASSES ===============
const fetchFirstClassElement = (className) => document.getElementsByClassName(className)[0]

/**
 * Generate a list of specified HTML elements using an object's keys.
 * @param {string} elem - The HTML tag to add the keys to.
 * @param {object} obj - The object to take the keys from.
 * @returns Array<Element>
 */
const getElementListFromKeys = (obj, elem='option') => {
    const optionsList = []
    for (let key in obj) {
        const newOpt = document.createElement(elem);
        newOpt.innerHTML = key;
        optionsList.push(newOpt);
    }
    return optionsList;
}

const hasSiblings = (elem) => elem.nextElementSibling


const selectionButton = fetchFirstClassElement("confirmation-button");
const skillSelector = fetchFirstClassElement("skill-selector");
const frontSection = fetchFirstClassElement("home-section");
const exerciseSection = fetchFirstClassElement("exercise-section");
const stepsSection = fetchFirstClassElement("exercise-section__steps");

// 'skills' is imported from 'collections.js'
const skillsList = getElementListFromKeys(skills);

skillSelector.append(...skillsList);


selectionButton.addEventListener('click', function(e) {
    e.preventDefault();

    /**
     * @type Skill
     */
    const selectedSkill = skills[skillSelector.value]

    /**
     * @type Array<string>
     */
    const skillSteps = selectedSkill.steps

    for (let skill of skillSteps) {
        const newStepElem = document.createElement('a');
        newStepElem.classList.add('exercise-section__step')
        exerciseSection.classList.add('activated');
        newStepElem.innerHTML = skill;
        newStepElem.addEventListener('click', function() {
            this.style.setProperty("--js-opacity", 0);
            if (hasSiblings(this)) {
                this.nextSibling.classList.toggle('exercise-section__step--displayed');
            }
        });
        stepsSection.append(newStepElem);
    };

    frontSection.setAttribute('class', 'home-section animate-out');
    exerciseSection.setAttribute('class', 'exercise-section activated animate-in');
})


const homeButton = fetchFirstClassElement("exercise-section__home-button")


homeButton.addEventListener('click', function() {

    frontSection.setAttribute('class', 'home-section animate-in');
    exerciseSection.setAttribute('class', 'exercise-section activated animate-out')
    setTimeout(() => {
        stepsSection.innerHTML = "";
        exerciseSection.classList.remove('activated');
    }, 1300)

})






