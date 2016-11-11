window.onload = function () {
  var genTable = document.getElementById('genTableButton');

  genTable.onclick = function () {
    console.log("Test");
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      console.log("Request test");
      if(request.readyState == 4) {
        if(request.status === 200) {
          var tr = '<tr>';
          var text = request.responseText.split('\n');
          console.log(text);
          for(var i = 0; i < text.length; i++){
            tr += '<td>' + text[i] + '</td>';
          }
          tr += '</tr>';
        }
        var content = document.getElementById('content');
        content.innerHTML = tr;
      }
    };
    request.open('GET', 'student_data.csv', true);
    request.send();
  };
};
