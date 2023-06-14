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


const selectionButton = fetchFirstClassElement("confirmation-button");
const skillSelector = fetchFirstClassElement("skill-selector");
const frontSection = fetchFirstClassElement("home-section");
const exerciseSection = fetchFirstClassElement("exercise-section");

// 'skills' is imported from 'collections.js'
const skillsList = getElementListFromKeys(skills);

skillSelector.append(...skillsList);


selectionButton.addEventListener('click', function(e) {
    e.preventDefault();

    const selectedSkill = skills[skillSelector.value]
    const skillSteps = selectedSkill.steps

    for (let i = 0; i < skillSteps.length; i++) {
        const stepElem = document.createElement('a');
        if (i === 0) {
            stepElem.classList.add('step')
        } else {
            stepElem.classList.add('step', 'hidden');
        }
        stepElem.innerHTML = skillSteps[i];
        stepElem.addEventListener('click', function() {
            this.style.setProperty("--js-opacity", 0);
            if (this.nextSibling) {
                sibilingClasses = [...this.nextSibling.classList];
                if (sibilingClasses.includes('hidden')) {
                    this.nextSibling.classList.toggle("hidden");
                }
            } else {
                frontSection.style.animation = "go-in 1.2s";
                frontSection.style.animationFillMode = "forwards";
                exerciseSection.style.animation = "go-out 1.2s forwards";
                setTimeout(() => {
                    exerciseSection.innerHTML = "";
                }, 1300)
            }
        })
        exerciseSection.appendChild(newStep);
    };

    frontSection.style.animation = "go-out 1.2s";
    frontSection.style.animationFillMode = "forwards";
    exerciseSection.classList.remove('hidden');
    exerciseSection.style.animation = "go-in 1.2s";
    exerciseSection.style.animationFillMode = "forwards";
    //exerciseSection.style.animationPlayState = "running";

})











