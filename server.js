var app = require('express')();
var multer = require('multer');
var upload = multer();


app.get('/', function (req, res) {
  res.sendFile('index.html', {root:__dirname});
});

app.post('/get-file-size', upload.single('file'), function (req, res) {
	res.json({size: req.file.size});
});

app.listen(process.env.PORT || 80, function () {
	if (process.env.PORT) {
		console.log('Example app listening on port' + process.env.PORT + '!');
	} else {
		console.log('Example app listening on port 80!');
	}
});