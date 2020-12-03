var express = require('express');
var router = express.Router();

const anaSayfa=function(req,res,next){
 res.render('mekanlar-liste',{
 	'baslik':'Anasayfa',
 	'footer':'Doğuş Erdem 2020',
 	'sayfaBaslik': {
 		'siteAd':'Mekan 32',
 		'aciklama':'Isparta Civarındaki Mekanları Keşfedin!'
 	},
 	'mekanlar':[
 	{
 		'ad':'Starbucks',
 		'adres':'Centrum Garden AVM',
 		'puan':2,
 		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
 		'mesafe':'5 km'
 	},
 	 {
 	 	'ad':'Köfteci Yusuf',
 	 	'adres':'Çünür Mh, Süleyman Demirel Cd. No:167/171, 32200 Isparta Merkez/Isparta',
 	 	'puan':4,
 	 	'imkanlar':['Köfte','Tatlı Çeşitleri','Döner Çeşitleri','Salata Çeşitleri'],
 	 	'mesafe':'10 km'
 	 },
 	 {
 	 	'ad':'HD İskender',
 	 	'adres':'İyaş Park AVM',
 	 	'puan':3,
 	 	'imkanlar':['İskender','Çorba Çeşitleri','Özel Menüler'],
 	 	'mesafe':'8 km'
 	 },
 	 {
 	 	'ad':'MADO',
 	 	'adres':'İyaş Park AVM',
 	 	'puan':4,
 	 	'imkanlar':['Dondurma Çeşitleri','Pastalar','Tatlılar'],
 	 	'mesafe':'8 km'
 	 },
 	 {
 	 	'ad':'Kebapçı Kadir',
 	 	'adres':'Kutlubey, Hükümet Meydanı Kebapçılar Arastası No:8, 32100 Isparta Merkez/Isparta',
 	 	'puan':3,
 	 	'imkanlar':['Kebap','Salata Çeşitleri','Yöresel Lezzetler'],
 	 	'mesafe':'12 km'
 	 }
 	]
 });
}

const mekanBilgisi=function(req,res,next){
 res.render('mekan-detay',{
 	'baslik':'Mekan Bilgisi',
 	'sayfaBaslik':'Starbucks',
 	'footer':'Doğuş Erdem 2020',
 	'mekanBilgisi':{
 		'ad':'Starbucks',
 		'adres':'Centrum Garden AVM',
 		'puan':3,
 		'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
 		'koordinatlar':{
 			'enlem':'37.781835',
 			'boylam':'30.566034'
 		},
 		'saatler':[
 		  {
 			'gunler':'Pazartesi - Cuma ',
 			'acilis':' 07:00 ',
 			'kapanis':' 23:00 ',
 			'kapali':false
 		  },
 		  {
 			'gunler':'Cumartesi ',
 			'acilis':' 09:00 ',
 			'kapanis':' 22:00 ',
 			'kapali':false
 			
 		  },
 		  {
			'gunler':'Pazar ',
 			'kapali':true
 		
 		  }
 		],
 		'yorumlar':[
 		   {
 		   	 'yorumYapan':'Doğuş Erdem',
 		   	 'puan':3,
 		   	 'tarih': '02.12.2020',
 		   	 'yorumMetni':'Daha iyi olabilirdi'
 		   },
 		   {
 		 	 'yorumYapan':'Melike Şahin',
 		   	 'puan':4,
 		   	 'tarih': '02.12.2020',
 		   	 'yorumMetni':'Başarılıydı tavsiye ederim'
 		   }
 		]
 	   }
 });
}

const yorumEkle=function(req,res,next){
 res.render('yorum-ekle',{title:'Yorum Ekle'});
}
module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}