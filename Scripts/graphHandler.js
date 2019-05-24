
const POINT_RADIUS = 5;

function updateGraph() { // redraw everything
    clearGraph();

    // save old state
    ctx.save();

    updatePoints();
    plotLine();
}

function updatePoints() {
    for (var i = 0; i < plottedPoints.length; i++) {
        var cur = plottedPoints[i];
        ctx.beginPath();
        ctx.arc(cur.x, cur.y, POINT_RADIUS, 0, 2*Math.PI);
        ctx.fillStyle = 'rgb(244, 66, 66)';
        ctx.fill();
    }
}

// Will plot a line on the graph. 
// use ctx.beginPath()
// ctx.lineTo(x, y) <-- moves location of "pen" to x, y, adds line to path
// ctx.stroke() <-- actually draws stroke
// assume input is a list of objects with .x and .y properties
// Also assume input is ordered properl
function plotLine() {

    ctx.beginPath();
    for (var i = 0; i < curLine.length; i++) {
        var cur = curLine[i];
        ctx.lineTo(cur.x, cur.y);
    }

    ctx.fillStyle = 'rgb(0, 0, 0)'; // I hope this is black...

    ctx.stroke();

}

function clearGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function undoGraph() {

    // save old state
    ctx.restore();
}