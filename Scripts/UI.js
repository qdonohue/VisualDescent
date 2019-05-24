
// TO DO - figure out how the hell you update innerHTML 
// in Jquery and make these functions work
function updateAlpha(newAlpha) {
    var alphaDisplay = $('#currentAlpha');
    alphaDisplay.html(newAlpha);
}

function updateLoss(newLoss) {
    var lossDisplay = $('#currentLoss');
    lossDisplay.html(newLoss);
}

function updateIteration(newIteration) {
    var iterationDisplay = $('currentIteration');
    iterationDisplay.html(newIteration);
}