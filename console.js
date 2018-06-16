(function() {
    var old = console.log;
    var logger = document.getElementById('log');


    console.log = function(msg) {
        var image = document.createElement("img");
        image.setAttribute("src", "https://media.giphy.com/media/5jWIqTzFUXlSaXN21a/giphy.gif");
        image.setAttribute("id", "donut");
        logger.appendChild(image)
        if (typeof msg == 'undefined') {
            image.setAttribute("src", "https://media.giphy.com/media/3o6fJ8bYYnCW95ST0A/giphy.gif");
        } else if (typeof msg == 'boolean') {
            image.setAttribute("src", "https://media.giphy.com/media/l0HlQ3G4QVZJsKvte/giphy.gif");
        } else if (msg === null && typeof msg === "object") {
            image.setAttribute("src", "https://media.giphy.com/media/1oInQF9RIwD1VXe8Ha/giphy.gif");
        } else if (typeof msg == 'number') {
            image.setAttribute("src", "https://media.giphy.com/media/9Pmf3dqpfxX3XRC3il/giphy.gif");
        }
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'object') {
                logger.innerHTML += "<br/>" + " " + JSON.stringify(arguments[i]) + '<br />';
            } else {
                logger.innerHTML += " " + arguments[i] + " (Type of value:" + typeof arguments[i] + ")" + '<br />';

            }
        }
    } // end of for

})()

console.log(9);
console.log("nine");
console.log(false);
console.log(true)
console.log(10);
var x;
console.log(x)
var y = null;
console.log(y)
var car = {
    "1": 2,
    "2": 3
}
console.log(car)
