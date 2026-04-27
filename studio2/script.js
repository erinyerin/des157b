(function(){
    'use strict';

    const smileys = document.querySelectorAll('#datapoints > img')
    const card = document.querySelector('#card')
    const close = document.querySelector('#closeCard')

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

})();