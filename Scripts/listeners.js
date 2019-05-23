
function init() {
    var canvas = document.getElementById("mainGraph");
    var context = canvas.getContext('2d');
    var offsetLeft = canvas.offsetLeft,
    offsetTop = canvas.offsetTop;

    canvas.addEventListener('click', function(event) { // When you click on a point, add point there
        var x = event.pageX - offsetLeft,
        y = event.pageY - offsetTop;

        var point = {}
        point.x = x;
        point.y = y;

        plottedPoints.push(point);
        updateGraph();
    });

    $("#reset").click(function() {
        plottedPoints = [];
        updateGraph();
    });
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    console.log("Canvas bounding box: ");
    console.log(rect);
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}