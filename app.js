const selectionButton = document.getElementById("selection-button");


const collare = new Skill("Collare Cervicale")
const spinale = new Skill("Spinale", [])


const skillSelector = document.getElementById("skills");

for (let skill in skills ) {
    const newSkill = document.createElement('option');
    newSkill.innerHTML = skills[skill].title;
    skillSelector.appendChild(newSkill);
}


selectionButton.addEventListener('click', function(e) {
    e.preventDefault();

    const frontSection = document.getElementById("front-section");
    const exerciseSection = document.getElementById("exercise-section");

    skillSteps = skills[skillSelector.value].steps

    for (let i = 0; i < skillSteps.length; i++) {
        const newStep = document.createElement('p');
        if (i === 0) {
            newStep.classList.add('step')
        } else {
            newStep.classList.add('step', 'hidden');
        }
        newStep.innerHTML = skillSteps[i];
        newStep.addEventListener('click', function() {
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











