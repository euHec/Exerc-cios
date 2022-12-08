const header = document.getElementById("header-container");
header.style.backgroundColor = 'green';

const session1 = document.getElementsByClassName("emergency-tasks")[0];
session1.style.backgroundColor = 'pink';

const session2 = document.getElementsByClassName("no-emergency-tasks")[0];
session2.style.backgroundColor = 'yellow';

const session1Filho = document.querySelectorAll('.emergency-tasks h3');

    for (let index1 = 0; index1 < session1Filho.length; index1 += 1) {
        session1Filho[index1].style.backgroundColor = 'hotpink';
    }

const session2Filho = document.querySelectorAll('.no-emergency-tasks h3');

    for (let index = 0; index < session2Filho.length; index += 1) {
        session2Filho[index].style.backgroundColor = 'black';        
    }


const footer = document.getElementById("footer-container");
footer.style.backgroundColor = 'darkgreen';