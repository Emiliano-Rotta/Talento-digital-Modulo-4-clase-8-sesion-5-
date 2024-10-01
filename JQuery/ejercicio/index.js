$(function () {
    mostrarNumeroTareas()
    $("#btn1").click(function(){
        $("#listaTareas").append("<li>Nueva tarea</li>");
        mostrarNumeroTareas()
    })
    $("#btn2").click(function(){
        $("#listaTareas li:nth-child(2)").text("tarea modificada")
        mostrarNumeroTareas()
    })
    $("#btn3").click(function(){
        $("#listaTareas li:last").remove();
        mostrarNumeroTareas()
    })
    function mostrarNumeroTareas(){
        console.log("numero de tareas: ", $("#listaTareas li").length)
    }
    
})