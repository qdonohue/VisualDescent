
const GRAPH_WIDTH = 800;
// points that have been added to the plot
var plottedPoints = [];
// a set of x,y pairs representing the current line of best fit
var curLine = [];
var canvas = document.getElementById('mainGraph');
var ctx = canvas.getContext('2d');
