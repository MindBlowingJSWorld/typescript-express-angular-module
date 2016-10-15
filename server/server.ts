import express = require('express');
import path = require('path');

var app = express();
var port: number = process.env.PORT || 3000;

// None of follwing works :(
app.use(express.static(__dirname));

/*
app.use('/', express.static(__dirname));
app.use('/app', express.static('app'));
*/

/*
app.use(express.static(path.join(__dirname, '/')));
*/

/*
app.use('/app', express.static(__dirname + 'app'));
app.use('/libs', express.static(__dirname + 'libs'));
*/

/*
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

app.get('/*', renderIndex);
*/

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});