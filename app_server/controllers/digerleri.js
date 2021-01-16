var footer="Doğuş ERDEM 2020"
const hakkinda=function(req , res , next) {
  res.render('hakkinda' , { title:'Hakkında',
  	footer:footer
   });
}

module.exports={

  hakkinda
}