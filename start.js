var ffmetadata = require("ffmetadata");
var metadata = require('./metadata');

var songname = "";
process.argv.forEach(function (val, index, array) {
    console.log(songname);
    songname = val;
});


if (songname) {
    // Read song.mp3 metadata 
    ffmetadata.read(songname, function (err, data) {
        if (err) console.error("Error reading metadata", err);
        else console.log(data);
    });
}


// // Set the artist for song.mp3 
// var data = metadata;
// ffmetadata.write("song.mp3", data, function (err) {
//     if (err) console.error("Error writing metadata", err);
//     else console.log("Data written");
// });