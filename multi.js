console.log('connected');
const check = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastCheck;

function handleCheck(e) {
    //check if they had the shift key is down
    //and check if theychecking it
    console.dir(e);
    let inBetween = false;
    if (e.shiftKey && this.checked) { //loop over every single box
        check.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastCheck) {
                inBetween = !inBetween;
                console.log("starting to check in between");

            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })


    }
    lastCheck = this;
}


check.forEach(checkbox => checkbox.addEventListener('click', handleCheck));