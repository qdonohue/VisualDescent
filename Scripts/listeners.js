
function init() {
    canvas.setAttribute('width', '800');
    canvas.setAttribute('height', '600');

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

    for (var i = 0; i < GRAPH_WIDTH; i++) {
        var cur = {};
        cur.x = i;
        cur.y = 300; // hopefully flat line across...
        curLine.push(cur);
    }

    $("#reset").click(function() {
        plottedPoints = [];
        clearGraph();
    });

    $('#undo').click(function() {
        undoGraph();
    });
}
