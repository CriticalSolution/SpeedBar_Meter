function speedBar(value) {

    var sCanvas = document.getElementById("speedCanvas");
    contex = sCanvas.getContext("2d");

    //background color
    contex.fillStyle = "black";
    contex.fillRect(0, 0, sCanvas.width, sCanvas.height);

    //x,y must be starting point
    var x = 50;
    var y = 100;

    //a, b represent size of rectangle
    var a = 5;
    var b = 100;

    //For gap between rectangles
    var gap = 1;

    //to put text center
    // x_text ise sCanvas.width / 2 ;
    // y_text = y - 25;
    var x_text = (sCanvas.width / 2) - 15;
    var y_text = y - 25;

    if (value <= 50) {
        contex.fillStyle = "yellow";
    } else if (value > 50 && value <= 90) {
        contex.fillStyle = "green";
    } else {
        contex.fillStyle = "red";
    }
    contex.font = "bold 32pt arial";
    contex.fillText(value, x_text, y_text);

    for (var i = 0; i < value; i++) {
        if (i <= 50) {
            contex.fillStyle = "yellow";
        } else if (i > 50 && i <= 90) {
            contex.fillStyle = "green";
        } else {
            contex.fillStyle = "red";
        }
        contex.fillRect(x, y, a, b);
        x += a + gap;
    }

    for (var i = value; i < 100; i++) {
        contex.fillStyle = "white";
        contex.fillRect(x, y, a, b);
        x += a + gap;
    }
}
