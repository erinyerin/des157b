(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([52.520008, 13.404954], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var home = L.marker([52.490095, 13.334045]).addTo(map);
    var school = L.marker([52.426072, 13.356433]).addTo(map);
    var coffee = L.marker([52.487987, 13.337274]).addTo(map);
    var brunch = L.marker([52.505411, 13.299376]).addTo(map);

    home.bindPopup(
        `<p><b>Home</b><br>I rented a room in a beautiful Altbau apartment with a lovely older couple who ran an art gallery together.</p>
        <img src="images/home.jpg" width="100" height="133">`
    );

    school.bindPopup(
        `<p><b>School</b><br>I took two clases at the Freie Universität Berlin – one in Berlin's architectural history, and another in B2 level German.</p>
        <img src="images/school.jpg" width="100" height="133">`
    );

    coffee.bindPopup(
        `<p><b>Cafe Magic Bitte</b><br>My favorite coffeeshop in the neighborhood, right in front of my U-bahn stop - I often grabbed a treat for my hour long commute to class!</p>
        <img src="images/coffee.jpg" width="100" height="133">`
    );

    brunch.bindPopup(
        `<p><b>Cafe Windback</b><br>My friends and I grabbed brunch together here on our final day in Berlin. Türkiye, France, and US represented at one table!</p>
        <img src="images/brunch.jpg" width="100" height="133">`
    );

    
}());