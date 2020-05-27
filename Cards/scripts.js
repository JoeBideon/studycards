document.querySelector("#submit").addEventListener("click", createCard);

function createCard() {
    let question = document.querySelector("#question").value;
    let answer = document.querySelector("#answer").value;
    console.log({ question, answer });
}
