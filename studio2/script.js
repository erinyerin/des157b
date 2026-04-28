(function(){
    'use strict';

    const smileys = document.querySelectorAll('#datapoints > img')
    const card = document.querySelector('#card')
    const close = document.querySelector('#closeCard')

    const name = document.querySelector('#name')
    const when = document.querySelector('#when')
    const where = document.querySelector('#where')
    const how = document.querySelector('#how')

    const container = document.querySelector('#datapoints');

    //making smileys grow on hover
    smileys.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    smileys.forEach(function(img){
        img.addEventListener('click', function(){
            card.classList.remove('hidden');
            card.classList.add('slide-up');
            card.classList.remove('slide-down');

            close.addEventListener('click', function(){
                card.classList.add('slide-down');
                card.classList.remove('slide-up');
            })
        })
    })

    async function getData() {
        const data = await fetch('data.json').then(function(response) {
            return response.json();
        });
        setupButtons(data);
    }

    function setupButtons(data){

        const keys = Object.keys(data);
        const values = Object.values(data);

        for (var i = 0; i < smileys.length; i++) {
            smileys[i].dataset.index = i;
        }

        container.addEventListener('click', function(event) {
            if (event.target.tagName === 'IMG') {
                var index = event.target.dataset.index;
                displayData(keys[index], values[index]);
            }
        });
    }

    function displayData(friend, item){
        name.innerHTML = `Name: ${friend}`
        when.innerHTML = `When: ${item.when}`
        where.innerHTML = `Where: ${item.where}`
        how.innerHTML = `How I know them: ${item.how}`
    }

    getData()


})();