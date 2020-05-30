document.querySelector("#submit").addEventListener("click", createItems);

function createItems() {
    //for some reason, this with the .content returns the document
    //fragment, so i have to use .childNOdes[1] to get the div i want
    let container = document
        .querySelector("template")
        .content.childNodes[1].cloneNode(true);
    document.querySelector("output").appendChild(container);

    //so that theres a space between the question: and this
    let question = " ";
    question += document.querySelector("#question").value;

    let answer = document.querySelector("#answer").value;

    appendItems();
    function appendItems() {
        //this one is defined because i need to change its style later on
        let cardAnswer = container.querySelector("#answer");
        cardAnswer.innerText = answer;

        container.querySelector("#question").innerText += question;

        //when the show answer text is clicked, run show answer function
        let show = container.querySelector("h4");
        show.addEventListener("click", function () {
            showAnswer(cardAnswer, show);
        });
    }
}

function showAnswer(answer, show) {
    if (answer.style.display === "block") {
        answer.style.display = "none";
        show.innerText = "Show Answer";
    } else {
        answer.style.display = "block";
        show.innerText = "Hide Answer";
    }
}
