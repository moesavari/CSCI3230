var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.set('port', process.env.PORT || 2500);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

var usernames = ['admin', 'bsmith', 'rfortier'];

function userExists(toFind){
	var exists = false;

	for(var i = 0; i < usernames.length; i++){
		if(usernames[i] === toFind){
			return true;
		}
	}
	return false;
}

app.get('/checkUsername', function(request, response) {
  response.render('enterUsername', {message: 'Enter username:'});
});

app.post('/checkUsername', function(request, response){
  var username = request.body.username;
  if(userExists(username)){
    response.render('enterUsername', {message: 'Username exists!'});
  } else {
    response.render('enterUsername', {message: 'Username is available'});
  }
});

app.listen(app.get('port'), function() {
	console.log('Server listening on port ' + app.get('port'));
});
