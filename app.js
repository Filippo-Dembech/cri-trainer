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

    for (let step of skills[skillSelector.value].steps) {
        const newStep = document.createElement('p');
        newStep.classList.add('step');
        newStep.innerHTML = step;
        newStep.addEventListener('click', function() {
            this.style.setProperty("--js-opacity", 0);
        })
        exerciseSection.appendChild(newStep);
    };

    frontSection.style.animation = "go-out 3s";
    frontSection.style.animationFillMode = "forwards";
    exerciseSection.style.animationPlayState = "running";

})











