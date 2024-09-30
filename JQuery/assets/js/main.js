// $(function () {
//     $("#btn1").click(function(){
//         console.log("Text: " + $("#test").text())
//     })
//     $("#btn2").click(function(){
//         console.log("HTML: " + $("#test").html())
//     })
//     $("#btn3").click(function(){
//         console.log("Value: " + $("#valorNom").val() + " " + $("#valorAp").val())
//     })


// })

//------------------------------------------

// $(function () {
//     $("#btn1").click(function(){
//        $("#test").text("Remplazo el texto original")
//     })
//     $("#btn2").click(function(){
//         "HTML: " + $("#test").html("<h1>Hice crecer el texto</h1>")
//     })
//     $("#btn3").click(function(){
//        "Value: " + $("#valorNom").val("Juan") + " " + $("#valorAp").val("Jara")
//     })

// })

//------------------------------------------
$(function () {
    $("button").click(function() {
        $("#p1").css("background-color", "yellow")
        console.log($("#p2").css("background-color"))
        console.log($("#p3").css("background-color"))
    })

})
