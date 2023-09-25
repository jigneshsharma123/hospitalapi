const mongoose = require('mongoose');

const db = 'mongodb+srv://jigneshsharma9868:evqbn7lRDlrGLlal@cluster0.ho9dsqw.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db);

const connectDB = mongoose.connection;

connectDB.on('error', console.log.bind(console, "Error connecting to database"));

connectDB.once('open', function(){
	console.log("Connected to database:: MongoDB");
})

module.exports = connectDB;