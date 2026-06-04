(function() {
    'use strict'

    //top nav buttons
    const matchNavButton = document.querySelector('#matchNavButton')
    const homeNavButton = document.querySelector('#homeNavButton')
    const infoNavButton = document.querySelector('#infoNavButton')

    //swipe functionality for homepage
    const match = document.querySelector('#match')
    const pass = document.querySelector('#pass')

    let slideIndex = 1;
    const slides = document.querySelectorAll(".swipe")

    //keep track of matches here, store in browser to access on other pages
    //only initialize if it doesn't exist yet, cos else it runs and wipes it each time a new page runs
    if (!sessionStorage.getItem('matches')) {
        sessionStorage.setItem('matches', '');
    }

    if (document.querySelector('#match')){ //wrap this so it only runs when match button is on screen
    
        match.addEventListener('click', function(){
            animateAndAdvance('right');
            const val = sessionStorage.getItem('matches');
            
            if (val.includes(slideIndex)===false){
                sessionStorage.setItem('matches', val + slideIndex);
            }

            if (slideIndex == 1 && val.includes(slideIndex)===false){
                console.log('matched with olimpia!')
                setTimeout(()=>{
                    alert('New chat from Olimpia')
                    matchNavButton.innerHTML = `<span style="color: #72E455; font-size: 12px;">&#11044;</span>`
                }, 1000)
            }
            else if (slideIndex == 3 && val.includes(slideIndex)===false) {
                console.log('matched with Nathaniel!')
                setTimeout(()=>{
                    alert('New chat from Nathaniel')
                    matchNavButton.innerHTML = `<span style="color: #72E455; font-size: 12px;">&#11044;</span>`
                }, 5000)
            }
        })

        pass.addEventListener('click', function(){
            animateAndAdvance('left')
        })
    }

    function animateAndAdvance(direction) {
        let currentSlide = slides[slideIndex-1];

        currentSlide.style.transition = "transform 0.4s ease, opacity 0.4s ease";
        //basically if right translate 150 else translate -150
        currentSlide.style.transform = direction === 'right' ? "translateX(150%)" : "translateX(-150%)";

        setTimeout(() => {
            // Reset the outgoing slide
            currentSlide.style.transition = "none";
            currentSlide.style.transform = "translateX(0)";
            currentSlide.style.opacity = "1";

            // Advance to next slide
            nextSlide(slideIndex += 1);
        }, 400);
    }

    function nextSlide(n) {
        let i;
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
            slides[i].classList.remove("fadeIn")

        }
        slides[slideIndex - 1].classList.add("fadeIn")
        slides[slideIndex - 1].classList.remove("hidden");
    }

    //populating matches page

    function populateMatches(){
        const matchesDiv = document.querySelector('#matchesDiv')
        //defining the inner HTML for each chat box
        const chat1 = `
            <div class="chat activeChat">
                <div>
                    <h2>Olimpia</h2>
                    <p>New chat from Olimpia</p>
                </div>
                <i class="fa-solid fa-circle-chevron-right" id="chatWithOlimpia"></i>
            </div>
        `
        const chat2 = `
            <div class="chat">
                <div>
                    <h2>Luther</h2>
                    <p>Pending Match</p>
                </div>
                <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
        `

        const chat3 = `
            <div class="chat activeChat">
                <div>
                    <h2>Nathaniel</h2>
                    <p>New chat from Nathaniel</p>
                </div>
                <i class="fa-solid fa-circle-chevron-right" id="chatWithNathaniel"></i>
            </div>
        `

        const chat4 = `
            <div class="chat">
                <div>
                    <h2>Clara</h2>
                    <p>Clara declined your match.</p>
                </div>
                <i class="fa-solid fa-circle-chevron-right"></i>
            </div>
        `

        const chats = { chat1, chat2, chat3, chat4 }; //array containing all the HTML elements

        let matches = sessionStorage.getItem('matches')

        if (matches.length === 0){
            document.querySelector('#matchesDiv p').classList.remove('hidden')
        } 
        else{
            for (let i = 0; i < matches.length; i++) {
                matchesDiv.innerHTML += chats[`chat${matches[i]}`]; 
            }
        }
    }

    //dialogue tree base code - call loadDialogue upon opening message page
    let dialogueData = {}; 

    async function loadDialogue() {
        const result = await fetch("dialogue.json");
        dialogueData = await result.json();
        displayText("A1");
    }

    function displayText(key) {
        
        const node = dialogueData[key];

        if (!node) {
            console.error(`Missing dialogue key: ${key}`);
            return;
        }

        if (node.speaker === "user") {
            appendMessage(node.content, "sentMessage");
            displayText(node.next);

        } else {
            appendMessage(node.content, "receivedMessage");
            const ul = document.querySelector("#dialogueOptions ul");
            ul.innerHTML = "";

            node.options.forEach(optionKey => {

            if (!node) {
                console.error(`Missing dialogue key: ${key}`);
                return;
            }

                const optionNode = dialogueData[optionKey];

                const li = document.createElement("li");
                li.textContent = optionNode.content;
                li.addEventListener("click", () => {
                    appendMessage(optionNode.content, "sentMessage");
                    setTimeout(() => {
                        displayText(optionNode.next);
                    }, 1000)

                });
                ul.appendChild(li);
            });
        }
    }

    function appendMessage(text, className) {
        const messages = document.getElementById("olimpiaDialogue");
        const p = document.createElement("p");
        p.className = className;
        p.textContent = text;
        messages.appendChild(p);
        messages.scrollTop = messages.scrollHeight; //auto scroll
    }

    //navigation buttons and calling functions 

    matchNavButton.addEventListener('click', function(){
        window.location.href = "matches.html";
    })

    homeNavButton.addEventListener('click', function(){
        window.location.href="index.html"
    })

    infoNavButton.addEventListener('click', function(){
        //open modal
    })

    //only call nextSlide() if you're on homepage and .swipe exists on page
    if (document.querySelector('.swipe')) {
        nextSlide(slideIndex);
    }

    //only call populateMatches if #matchesDiv exists on the page
    if (document.querySelector('#matchesDiv')){
        populateMatches()
        console.log(sessionStorage.getItem('matches'))
    }

    if (document.querySelector('#chatWithOlimpia')){
        chatWithOlimpia.addEventListener('click', function(){
            window.location.href="olimpiaChat.html"
        })
    }

    if (document.querySelector('#olimpiaDialogue')){
        loadDialogue()
    }

})()