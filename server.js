var express=require('express')
var path=require('path')

var app=express()


app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use('/static',express.static(path.join(__dirname,'public')))
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);


app.listen(process.env.PORT || 3000, function(){
    console.log("server live in node")
})