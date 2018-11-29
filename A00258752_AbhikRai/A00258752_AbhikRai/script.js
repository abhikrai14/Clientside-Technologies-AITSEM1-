function getHTTPObject() {
  var xhr = false;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e) {
        xhr = false;
      }
    }
  }
  return xhr;
}

function grabFile(file) {
  var request = getHTTPObject();
  if (request) {
    request.onreadystatechange = function() {
      parseResponse(request);
    };
    request.open("GET", file, true);
    request.send(null);
  }
}

function parseResponse(request) {
  if (request.readyState == 4) {
    if (request.status == 200 || request.status == 304) {
 
        var data  = request.responseXML;
        var description = data.getElementsByTagName("description")[0].firstChild.nodeValue;
        var diameter = data.getElementsByTagName("diameter")[0].firstChild.nodeValue;
        var feature = data.getElementsByTagName("feature")[0].firstChild.nodeValue;
        var price = data.getElementsByTagName("price")[0].firstChild.nodeValue;
        var image = data.getElementsByTagName("image")[0].firstChild.nodeValue;
        
        document.getElementById("section").innerHTML = "<img src= 'images/" + image +" ' > ";
        document.getElementById("section").innerHTML += "<p> " + description + "</p> <p>" + diameter + " </p><p>" + feature + " </p><p>" + price + " </p>";
    }
  }
}