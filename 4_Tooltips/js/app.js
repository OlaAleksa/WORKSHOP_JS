/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function () {

    var tooltips = document.querySelectorAll(".tooltip");

    console.log(tooltips);

    for (var i = 0; i < tooltips.length; i++) {

        tooltips[i].addEventListener("mouseover", function () {
            var text = this.dataset.text;
            var tooltip = document.createElement("span")

            tooltip.classList.add("tooltipText");
            tooltip.innerText = text;
            this.appendChild(tooltip);

        });

        tooltips[i].addEventListener("mouseout", function () {
            this.removeChild(this.firstElementChild);
        });
    }










});