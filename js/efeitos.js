$(document).ready(function(){
    $("#logotipo").on("mouseover",function(){
        
        $("#banner h1").addClass("ativo");

    }).on("mouseout",function(){

        $("#banner h1").removeClass("ativo");
    });
    $("#input-busca").on("focus",function(){

        $("li.busca").addClass("ativo");

    }).on("blur",function(){

        $("li.busca").removeClass("ativo")
    });
    $(".thumbnails").owlCarousel({
        loop:true,
        //nav:true,
        //navText: ["Anterior","Próximo"],
        responsive: {
            0:{
                items: 1
            },
            480:{
                items: 3
            },
            960:{
                items: 4
            }
        }
    });

});