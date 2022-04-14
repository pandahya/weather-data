let modal = document.getElementById("imageBox");
let span = document.getElementsByClassName("close")[0];
let viewCards = document.getElementsByClassName("view_card");

document.getElementById("c0409-1").addEventListener("click", function(){
    modal.style.display = "block";
    document.getElementById("0409-1_modal").style.display = "block";
});
document.getElementById("c0409-2").addEventListener("click", function(){
    modal.style.display = "block";
    document.getElementById("0409-2_modal").style.display = "block";
});

document.getElementById("c0410-1").addEventListener("click", function(){
    modal.style.display = "block";
    document.getElementById("0410-1_modal").style.display = "block";
});
document.getElementById("c0410-2").addEventListener("click", function(){
    modal.style.display = "block";
    document.getElementById("0410-2_modal").style.display ="block";

});

document.getElementById("c0411-1").addEventListener("click", function(){
    modal.style.display = "block";
    document.getElementById("0411-1_modal").style.display = "block";

});
document.getElementById("c0411-2").addEventListener("click", function(){
    modal.style.display = "block";
    document.getElementById("0411-2_modal").style.display = "block";
});

document.getElementById("c0412-1").addEventListener("click", function(){
    modal.style.display = "block";
    document.getElementById("0412-1_modal").style.display = "block";
});
document.getElementById("c0412-2").addEventListener("click", function(){
    modal.style.display = "block";
    document.getElementById("0412-2_modal").style.display = "block";
});

// document.getElementById("c0413-1").addEventListener("click", function(){
//     modal.style.display = "block";
//     document.getElementById("0413-1_modal").style.display = "block";
// });
document.getElementById("c0413-2").addEventListener("click", function(){
    modal.style.display = "block";
    document.getElementById("0413-2_modal").style.display = "block";
});
document.getElementById("c0413-3").addEventListener("click", function(){
    modal.style.display = "block";
    document.getElementById("0413-3_modal").style.display = "block";
});
span.onclick = function(){
    modal.style.display = "none";
    for(let i=0; i<viewCards.length; i++){
        viewCards[i].style.display = "none";
    }
}

window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none";
        for(let i=0; i<viewCards.length; i++){
            viewCards[i].style.display = "none";
        }
    }
}