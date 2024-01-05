function calculateThree() {
    var x = document.getElementById("gradeForm");
    var gp = 0;
    var tgp = 210;
    gp = gp + ((parseInt(x.elements[0].value) + parseInt(x.elements[1].value) + parseInt(x.elements[2].value) + parseInt(x.elements[3].value)) * 3);
    gp = gp + ((parseInt(x.elements[4].value) + parseInt(x.elements[5].value) + parseInt(x.elements[6].value)) * 3)

    var spi = (gp / tgp) * 10;
    spi = spi.toFixed(2);
    if (spi) {
        document.getElementById("marks").innerHTML = spi;
    } else {
        document.getElementById("marks").innerHTML = "invalidInput :(";
    }

}

function calculateFour() {
    var x = document.getElementById("gradeForm");
    var gp = 0;
    var tgp = 240;

    gp = parseInt(x.elements[0].value) + parseInt(x.elements[1].value) + parseInt(x.elements[2].value);
    gp = gp + (parseInt(x.elements[3].value) * 4);
    gp = gp + (parseInt(x.elements[4].value) + parseInt(x.elements[5].value) + parseInt(x.elements[6].value)) * 5;
    gp = gp + (parseInt(x.elements[7].value) * 2);


    var spi = (gp / tgp) * 10;
    spi = spi.toFixed(2);

    if (spi) {
        document.getElementById("marks").innerHTML = spi;
    } else {
        document.getElementById("marks").innerHTML = "invalidInput :(";
    }

}

function calculateFive() {
    var x = document.getElementById("gradeForm");
    var gp = 0;
    var tgp = 220;
    gp = gp + ((parseInt(x.elements[0].value) + parseInt(x.elements[1].value) + parseInt(x.elements[2].value) + parseInt(x.elements[3].value)) * 4);
    gp = gp + ((parseInt(x.elements[4].value) + parseInt(x.elements[5].value)) * 3)

    var spi = (gp / tgp) * 10;
    spi = spi.toFixed(2);
    if (spi) {
        document.getElementById("marks").innerHTML = spi;
    } else {
        document.getElementById("marks").innerHTML = "invalidInput :(";
    }

}

function calculateSix() {
    var x = document.getElementById("gradeForm");
    var gp = 0;
    var tgp = 200;

    gp = gp + ((parseInt(x.elements[0].value) + parseInt(x.elements[2].value)) * 4)
    gp = gp + ((parseInt(x.elements[1].value) + parseInt(x.elements[3].value) + parseInt(x.elements[4].value) + parseInt(x.elements[5].value)) * 3);

    var spi = (gp / tgp) * 10;
    spi = spi.toFixed(2);
    if (spi) {
        document.getElementById("marks").innerHTML = spi;
    } else {
        document.getElementById("marks").innerHTML = "invalidInput :(";
    }

}

function calculateSeven() {
    var x = document.getElementById("gradeForm");
    var gp = 0;
    var tgp = 220;

    gp = gp + ((parseInt(x.elements[0].value) + parseInt(x.elements[4].value)) * 4);
    gp = gp + ((parseInt(x.elements[1].value) + parseInt(x.elements[5].value) + parseInt(x.elements[6].value)) * 3);
    gp = gp + (parseInt(x.elements[2].value) * 2);
    gp = gp + (parseInt(x.elements[3].value) * 1);

    var spi = (gp / tgp) * 10;
    spi = spi.toFixed(2);

    if (spi) {
        document.getElementById("marks").innerHTML = spi;
    } else {
        document.getElementById("marks").innerHTML = "invalidInput :(";
    }

}

function calculateEight() {
    var x = document.getElementById("gradeForm");
    var gp = 0;
    var tgp = 110;
    gp = gp + parseInt(x.elements[0].value) * 11;

    var spi = (gp / tgp) * 10;
    spi = spi.toFixed(2);
    if (spi) {
        document.getElementById("marks").innerHTML = spi;
    } else {
        document.getElementById("marks").innerHTML = "invalidInput :(";
    }

}

function refresh() {
    window.location.reload(false);
}