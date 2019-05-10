document.addEventListener("DOMContentLoaded", function () {


    var btnPrev = document.querySelector("#prevPicture");
    var btnNext = document.querySelector("#nextPicture");
    var list = document.querySelectorAll("li");
    var index = 0;

    console.log(btnPrev);
    console.log(btnNext);
    console.log(list);
    console.log(index);

    list[index].classList.add("visible");

    btnNext.addEventListener("click", function (){
        console.log("kliknięty")
    });


    btnPrev.addEventListener("click", function (){
            console.log("kliknięty")
    });


    btnNext.addEventListener("click", function () {
        list[index].classList.remove("visible");
        index++;
        if (index >= list.length) {
            index = 0
        }
        list[index].classList.add("visible");
    });


    btnPrev.addEventListener("click", function () {
         list[index].classList.remove("visible");
         index--;
         if (index < 0) {
             index = list.length - 1;
         }
         list[index].classList.add("visible");
    });



});

