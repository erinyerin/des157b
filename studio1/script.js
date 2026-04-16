(function() {
    "use strict";
    
    // Lyrics functionality here 

    var lyrics = document.querySelector('#lyrics')

    var clearLyrics = setTimeout(function(){
        lyrics.innerHTML = "";
    }, 4000);

    var lyric1play = setTimeout(function(){
        lyrics.innerHTML = "This is how it ends...";
    }, 12000);

    var lyric2play = setTimeout(function(){
        lyrics.innerHTML = "No money, no friends...";
    }, 15500);

    var lyric3play = setTimeout(function(){
        lyrics.innerHTML = "...and I just got a hard on.";
    }, 19000);

    var clear = setTimeout(function(){
        lyrics.innerHTML = "";
    }, 26000)

    //Click for flowers functionality here

    var images = ['images/flowerpink.png', 'images/flowergreen.png', 'images/flowerpurple.png'];
    var currentImage = 0;

    document.addEventListener('click', function(event) {
        var img = document.createElement('img');
        img.src = images[currentImage];
        img.style.position = 'absolute';
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.left = (event.pageX - 50) + 'px';
        img.style.top = (event.pageY - 50) + 'px';

        document.body.appendChild(img);
        
        if (currentImage < 2){
            currentImage = (currentImage + 1);
        }
        else{
            currentImage = 0;
        }
    });


})();