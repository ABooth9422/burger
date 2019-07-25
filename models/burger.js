var orm=require('../config/orm')
console.log(orm+'burger.js')

var burger={
    all:function(cb){
        orm.selectAll("burgers",cb,function(res){
            cb(res)
        })
    },

    create:function(name,devoured,cb){
        orm.insertOne(name,devoured),function(res){
            cb(res)
        }
    },

    update:function(id,name,cb){
        orm.updateOne('burgers',name,id,cb),function(res){
            cb(res)
        }
    }

}





module.exports=burger