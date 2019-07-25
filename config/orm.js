var connection=require('../config/connection')



var orm={
    selectAll:function(table,cb){
        var query=`SELECT * FROM `+ table +';';
        connection.query(query,function(err,resp){
            if (err) throw err
            cb(resp)
        })

    },
    insertOne:function(name,devoured,cb){
        var query= `INSERT INTO burgers (burger,devoured) VALUES (?,?)`
        connection.query(query,name,devoured,function(err,resp){
            console.log(resp+'object from query')
            if (err) throw err
            cb(resp)
        })


    },
    updateOne:function(table,id,cb){
        var query=`UPDATE` + table
        query+=`SET devoured=1`
        query+=`WHERE (?)`

        connection.query(query,[name,id],function(err,resp){
            if(err) throw err

            cb(resp)
        })
    

    }
}




module.exports=orm