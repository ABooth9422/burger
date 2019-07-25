

$(document).ready(function(){
    $('#submitBurger').on('click',function(){
        var name = $("#burgerName").val().trim()
        var newBurger={
            title:name,
            devoured:0
        }
    
    $.post('/addBurger',newBurger,function(data){
        console.log('posted')
        location.reload()
    })


})
})