/* Javascript */
var popup = document.getElementById('popup');
var button = document.getElementById('button');

button.onclick = function(){
  if(popup.style.visibility=='visible')
      popup.style.visibility='hidden';
  else
      popup.style.visibility='visible';
}

function output(e){
  if(e.keyCode == 13){
    var message = document.getElementById('message').value;
    document.getElementById('output').innerHTML += "You: " + message + "<br>";
    document.getElementById('message').value = '';
    return false;
  }
}
