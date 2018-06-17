(function() {
  var old = console.log;
  var logger = document.getElementById('log');
  var lineNum = -1;
  console.log = function(msg) {
    lineNum++;
    var span = document.createElement("span");
    span.setAttribute("id", "line-number");
    var numText = document.createTextNode(lineNum + ".");
    span.appendChild(numText);
    var image = document.createElement("img");
    image.setAttribute("src", "https://media.giphy.com/media/5jWIqTzFUXlSaXN21a/giphy.gif");
    image.setAttribute("id", "donut");
    logger.appendChild(span);
    logger.appendChild(image);
    if (typeof msg == 'undefined') {
      image.setAttribute("src", "https://media.giphy.com/media/3o6fJ8bYYnCW95ST0A/giphy.gif");
    } else if (typeof msg == 'boolean') {
      image.setAttribute("src", "https://media.giphy.com/media/l0HlQ3G4QVZJsKvte/giphy.gif");
    } else if (msg === null) {
      image.setAttribute("src", "https://media.giphy.com/media/5SzpVxeeBUTUi6s0Eg/giphy.gif");
    } else if (typeof msg == 'number') {
      image.setAttribute("src", "https://media.giphy.com/media/9Pmf3dqpfxX3XRC3il/giphy.gif");
    } else if (typeof msg == 'function') {
      image.setAttribute("src", "https://media.giphy.com/media/24FIh2qQLsTVyAL03I/giphy.gif");
    } else if (msg instanceof Array) {
      image.setAttribute("src", "https://media.giphy.com/media/2sfDnHIEFe7aAbArdZ/giphy.gif");
    } else if (msg instanceof Object) {
      image.setAttribute("src", "https://media.giphy.com/media/5Ypzkp2Ia3vI9ieJjK/giphy.gif");
    }
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == 'object') {
        var foo = arguments[i];
        logger.innerHTML += " " + JSON.stringify(arguments[i]) + " (Type of value:" + typeof arguments[i] + ")" + "</br>";
        for (var k = 0; k < foo.length; k++) {
          logger.innerHTML += "</br>" + JSON.stringify(foo[k]) + " is at index: " + k + " (Type of value is " + typeof foo[k] + ")" + "</br>"
        } // end of nested for
      } else {
        logger.innerHTML += " " + arguments[i] + " (Type of value:" + typeof arguments[i] + ")" + '<br />';
      } // end of else
    } // end of for
    for (var i = 0; i < arguments.length; i++) {
      if (msg == "[object Object]") {
        var indexProp = 0;
        for (var key in msg) {
          logger.innerHTML += key + ': ' + msg[key] + " (The index of this key:value pair is " + indexProp + ")" + "</br>"
          indexProp++;
        } // end of for
      } // end of if
    } // end of for
  } // end of console.log function
  console.clear = function() {
    var clearText = document.createTextNode("Clearing console..");
    var cloudImage = document.createElement("img");
    cloudImage.setAttribute("id", "cloud");
    cloudImage.setAttribute("src", "https://media.giphy.com/media/5e3IozdPgJY9f6HPxY/giphy.gif");
    var div = document.createElement("div");
    div.setAttribute("class", "col-lg-12");
    div.setAttribute("id", "clear-div");
    var consoleRow = document.getElementById("consolerow");
    div.appendChild(clearText);
    div.appendChild(cloudImage);
    document.body.appendChild(div)
    setTimeout(function() {
      div.innerHTML = "";
      logger.innerHTML = "";
    }, 3000);
  } //end of console clear
  console.table = function(msg) {
    logger.innerHTML += msg;
  } // end of console warn
})();
var person = {
  "name": "Dogs",
  age: 100
}
console.log(person);
console.log([1,2,3]);
console.log("This is a string")
var foo;
console.log(foo)
