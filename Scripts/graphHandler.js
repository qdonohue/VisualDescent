
const POINT_RADIUS = 5;

function updateGraph() { // redraw everything
    var canvas = document.getElementById('mainGraph');
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < plottedPoints.length; i++) {
        var cur = plottedPoints[i];
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, POINT_RADIUS, 0, 2*Math.PI);
        ctx.fillStyle = 'rgb(244, 66, 66)';
        ctx.fill();
    }
}