var express=require('express')

var router=express.Router()

var burger=require('../models/burger')
console.log(burger+'burgercontroller')


router.get('/',function(req,resp){
    burger.all(function(data){
        var handlebarObj={
            burger:data
        };
        console.log(handlebarObj+'handlebarobj')
        resp.render('index',handlebarObj)
    })
})

router.post('/addBurger',function(req,resp){

})

router.put('/update',function(req,resp){

})




module.exports=router