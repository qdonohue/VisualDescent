
function init() {
    var canvas = document.getElementById("mainGraph");
    canvas.setAttribute('width', '1000');
    canvas.setAttribute('height', '600');
    var ctx = canvas.getContext('2d');
    var offsetLeft = canvas.offsetLeft,
    offsetTop = canvas.offsetTop;
    var rect = canvas.getBoundingClientRect();
    oldLeft = rect.left;
    oldTop = rect.top;

    canvas.addEventListener('click', function(event) { // When you click on a point, add point there
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

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
