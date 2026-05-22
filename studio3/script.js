$(function(){
    'use strict'
    
    $( ".piece" ).draggable({ revert: "invalid", snap: "#face div"  });

    $( "#face" ).droppable();
    $( "#face" ).droppable();

    var granimInstance = new Granim({
        element: '#granim-canvas',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#9E9E9E', '#94BBE9'],
                    ['#989FB8', '#EEAECA']
                ]
            },
            "happy-state":{
                gradients: [
                    ['#ff9966', '#ff5e62'],
                    ['#00F260', '#0575E6']
                ]
            }
            
        }
    });

let droppedCount = 0;

$("#face").droppable({
  accept: ".piece",
  drop: function(event, ui) {
    droppedCount++;

    if (droppedCount === 4) {
      changeGradient();
    }
  }
});

function changeGradient() {
  console.log("All 4 items dropped!");
  granimInstance.changeState('happy-state')
}


})