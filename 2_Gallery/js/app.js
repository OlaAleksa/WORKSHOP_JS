/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function () {


    var img = document.querySelectorAll("img");
    var body = document.querySelector("body");

    console.log(img);
    console.log(body);

    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener('click', showImg);
    }

    function showImg (event) {
        var imgSrc = this.getAttribute("src");
        var newDiv = document.createElement("div");
        var newBtn = document.createElement("button");
        var newImg = document.createElement("img");

        newDiv.classList.add("fullScreen");
        newImg.classList.add("gallery");
        newBtn.classList.add("close");
        newBtn.innerText = "Close";
        newImg.setAttribute("src", imgSrc);
        newDiv.appendChild(newImg);
        newDiv.appendChild(newBtn);
        document.body.appendChild(newDiv);

        newBtn.addEventListener('click', function (event) {
            newDiv.parentNode.removeChild(newDiv);
        })
    }



});