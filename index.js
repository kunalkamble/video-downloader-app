const fs = require('fs');
const Url = require('url');
var dlvid = require('dlvid-core').Vimeo;

const url = "https://player.vimeo.com/video/355120249";

var download = dlvid.download(url, { quality: 'sd', type: 'progressive'});
download.done(function(file){
	file.pipe(fs.createWriteStream('movie.mp4'));
});