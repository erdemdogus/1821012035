var mongoose = require( 'mongoose');
var dbURI = 'mongodb+srv://mekan32:dqs321321@mekan32.54krf.mongodb.net/mekan32?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', function () {
	console.log('Mongoose' + dbURI+
		'adresindeki veritabanına bağlandı\n');
});

mongoose.connection.on('error',function(err){
	console.log('Mongoose bağlantı hatası\n: '+err);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose bağlantısı kesildi \n');
});
kapat = function(msg, callback) {
	mongoose.connection.close(function() {
		console.log('Mongoose kapatıldı\n' + msg);
		callback();
	});
};
// nodemon için
process.once('SIGUSR2', function(){
	kapat('nodemon kapatıldı\n', function(){
		process.kill(process.pid, 'SIGUSR2');
	});
});
//uygulama kapandığında kapat
process.on('SIGINT', function() {
	kapat('uygulamak kapatıldı\n', function() {
		process.exit(0);
	});
});
//heroku için
process.on('SIGTERM', function() {
	kapat('heroku kapatıldı\n', function() {
		process.exit(0);
	});
});
require('./mekansema');