document.addEventListener("DOMContentLoaded", function () {


    // pkt 2

    var allImg = document.querySelectorAll("img");
    var hideBtn = document.querySelector("#hideButton");
    var showBtn = document.querySelector("#showButton");
    var input = document.querySelector("#tagInput");

    console.log(allImg);
    console.log(hideBtn);
    console.log(showBtn);
    console.log(input);

    // pkt 3

    hideBtn.addEventListener("click", function (event) {
        var text = input.value;

        input.value = input.defaultValue;

        for (var i = 0; i < allImg.length; i++) {
            var tag = allImg[i].dataset.tag;


            if (tag.indexOf(text) !== -1) {
                allImg[i].classList.add('invisible');
            }
        }
    });

    showBtn.addEventListener("click", function (event) {
        var text = input.value;

        input.value = input.defaultValue;

        for (var i = 0; i < allImg.length; i++) {
            var tag = allImg[i].dataset.tag;

            if (tag.indexOf(text) !== -1) {
                allImg[i].classList.remove('invisible');
            }
        }
    });



});