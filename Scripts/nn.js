// File that will do Gradient descent work
// We will base this off a neural net that will do gradient descent

// function that will produce predicted y values for a given x
// x: The given X value
// f: non-linear function we are applyng
// w1: First weight vector
// w2: don't make me say it
// b: bias
// ASSUMING ALL ARE Math.js matrices
function runNet(x, f, w1, w2, b) {

    var x2 = math.multiply(w1, x);

    var x3 = math.add(x2, b);

    var x4 = math.map(x3, f);

    var wT = math.transpose(w2);

    var x5 = math.dot(wT, x4);

    return x5;
}

function runNetTanh(x, w1, w2, b) {

    var x2 = math.multiply(w1, x);

    var x3 = math.add(x2, b);

    var x4 = math.map(x3, math.tanh());

    var wT = math.transpose(w2);

    var x5 = math.dot(wT, x4);

    return x5;
}

function getGradientInitial() {
    var grads = {};

    grads.w1 = math.zeros(VECTOR_LENGTH);
    grads.w2 = math.zeros(VECTOR_LENGTH);
    grads.b = math.zeros(VECTOR_LENGTH);
    grads.loss = math.zeros(VECTOR_LENGTH);

    return grads;
}

function netTanh(x, y, weights, grads) {
    var w1 = weights.w1;
    var w2 = weights.w2;
    var b = weights.b;

    var x2 = math.dot(w1, x);
    var x3 = math.add(x2, b);

    var x4 = math.map(x3, math.tanh());

    var w2T = math.transpose(w2);

    var yPrime = math.dot(w2T, x4);

    var diff = yPrime - y;

    var gw2 = x4*diff;

    function secSq(q) {
        var inter = 1 / math.cosh(q);
        return inter*inter;
    }

    var secX3 = math.map(x3, secSq);

    var gb = math.dotMultiply(math.dotMultiply(diff, w2), secX3);

    var gw1 = gb * x;

    grads.w1 = math.add(grads.w1, gw1);
    grads.w2 = math.add(grads.w2, gw2);
    grads.b = math.add(grads.b, gb);
    grads.loss = grads.loss + 1/2 * diff * diff;

    return yPrime;
}

function doNNTanh(x, y, weights, grads) {
    var yPrime = [];

    for (var i = 0; i < x.length; i++) {
        var returnY = netTanh(x[i], y[i], weights, grads);
        yPrime.push(returnY);
    }

    return yPrime;
}

function updateWeights(weights, grads, n, a) {
    var w1 = weights.w1;
    var w2 = weights.w2;
    var b = weights.b;

    var gw1 = grads.w1 * a / n;
    var gw2 = grads.w2 * a / n;
    var b = grads.b * a / n;

    weights.w1 = math.subtract(w1, gw1);
    weights.w2 = math.subtract(w2, gw2);
    weights.b = math.subtract(b, gb);
}

// do gradient descent using TanH
function gradientDescentTan(x, y, w1, w2, b) {
    var a = ALPHA;

    var oldLoss = Number.MAX_SAFE_INTEGER;

    var i = 0;

    var weights = {};
    weights.w1 = w1;
    weights.w2 = w2;
    weights.b = b;

    var n = x.length;

    while (!RESTART_DESCENT) {
        var grads = getGradientInitial();

        // run things through NN
        doNNTanh(x, y, weights, grads);

        // update weights
        updateWeights(weights, grads, n, a);

        var newLoss = grads.loss;

        if (Math.abs(oldLoss - newLoss) < CUTOFF) {
            console.log("Convergence reached");
            computeFittedLine(weights);
            return weights;
        }

        oldLoss = newLoss;

        i += 1;
    }
}