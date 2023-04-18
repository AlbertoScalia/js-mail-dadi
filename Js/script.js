//Creo un array contenente le varie mail
const approvedEmails = [
    `albescalia@gmail.com`,
    `albscalia@gmail.com`,
    `albertscalia@gmail.com`,
    `albertoscalia@gmail.com`,
    `albertoscl@gmail.com`,
    `alboscl@gmail.com`,
]

//Aggiungo le costanti
const userEmail = document.getElementById(`email`);
const btn = document.getElementById(`send`);
const answer = document.getElementById(`answer`);

//Creo un primo addEvent
btn.addEventListener(`click`, function () {

    let access = false;
    answer.classList.remove(`text-success`, `text-danger`);

    // Creo un ciclo for 
    for (let i = 0; i < approvedEmails.length && !access; i++) {

        if ((userEmail.value) === approvedEmails[i]) access = true;
    }

    //Pongo le condizioni che aggiungano/tolgano delle classi bootstrap e i relativi messaggi
    if (access) {
        answer.classList.remove(`d-none`);
        answer.classList.add(`text-success`, `fw-semibold`);
        message = `Accesso autorizzato!`;

    } else {
        answer.classList.remove(`d-none`);
        answer.classList.add(`text-danger`, `fw-semibold`);
        message = `Accesso negato!`;
    }

    answer.innerHTML = message;
})

//Aggiungo una costante per il reset
const reset = document.getElementById(`reset`);

//Creo un ultimo addEvent per il reset
reset.addEventListener(`click`, function () {
    userEmail.value = ``;
    const answer = document.getElementById(`answer`);
    answer.classList.add(`d-none`);
})
