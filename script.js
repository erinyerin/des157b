(function() {
    'use strict';

    const button = document.querySelector('#switch');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const curvetext = document.querySelector('textPath');
    const hover = document.querySelectorAll('.hover')
    let mode = 'light';
    console.log(button, body, banner, curvetext);


    button.addEventListener('click', function() {
        if (mode === 'light') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            banner.className = 'switch';
            curvetext.classList.add('switch');
            document.getElementById("switch").src = "images/closed.png";
            document.getElementById("column1").src = "images/martini.png";
            document.getElementById("column1").width = 200;
            document.getElementById("column2").src = "images/oldfashioned.png";
            document.getElementById("column2").width = 170;
            document.getElementById("column3").src = "images/beer.png";
            document.getElementById("column3").width = 190
            document.getElementById("column4").src = "images/wine.png";
            document.getElementById("column4").width = 200;
            mode = 'dark';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            banner.removeAttribute('class');
            curvetext.removeAttribute('class');
            document.getElementById("switch").src = "images/open.png";
            document.getElementById("column1").src = "images/americano.png";
            document.getElementById("column1").width = 190;
            document.getElementById("column2").src = "images/teapot.png";
            document.getElementById("column2").width = 230;
            document.getElementById("column3").src = "images/latte.png";
            document.getElementById("column3").width = 270
            document.getElementById("column4").src = "images/matcha.png";
            document.getElementById("column4").width = 160;
            mode = 'light'
        }
    })

    hover.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

})()