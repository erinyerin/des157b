(function() {
    'use strict'
    let dialogueData = {};
    const match = document.querySelector('#match')

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){
           document.querySelector('#overlay').className = 'hidden' 
        }
    })

    

    match.addEventListener('click', function(){
        alert("Olimpia wants to chat with you!");
        setTimeout(() => {
            window.location.href="chat.html";
        }, 2000);

    })

    async function loadDialogue() {
        const result = await fetch("dialogue.json");
        dialogueData = await result.json();
        displayText("A1");
    }

    function displayText(key) {
        const node = dialogueData[key];

        if (node.speaker === "user") {
            appendMessage(node.content, "sentMessage");
            displayText(node.next);

        } else {
            appendMessage(node.content, "receivedMessage");
            const ul = document.querySelector("#dialogueOptions ul");
            ul.innerHTML = "";

            node.options.forEach(optionKey => {
                const optionNode = dialogueData[optionKey];

                const li = document.createElement("li");
                li.textContent = optionNode.content;
                li.addEventListener("click", () => {
                    appendMessage(optionNode.content, "sentMessage");
                    displayText(optionNode.next);
                });
                ul.appendChild(li);
            });
        }
    }

    function appendMessage(text, className) {
        const messages = document.getElementById("messages");
        const p = document.createElement("p");
        p.className = className;
        p.textContent = text;
        messages.appendChild(p);
    }

    loadDialogue();

})()