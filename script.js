//TOGGLES MENU BTN

$(document).ready(function () {
  $("#btn1, #btn2, #btn3, #btn4").hide();
});

$("#menu_btn").on("click", function () {
  $("#btn1, #btn2, #btn3, #btn4").toggle("fast");
});

//SELECTING IMG CHANGE

var mainImg = document.querySelector("#main-image");
console.log(mainImg);

var thumbImgs = document.querySelectorAll(".img_selector");
console.log(thumbImgs);

for (let i = 0; i < thumbImgs.length; i++) {
  thumbImgs[i].addEventListener("click", (e) => {
    mainImg.src = e.target.src;

    //Selecting image name change
    document.getElementById("samples_header").innerHTML = thumbImgs[i].alt;
  });
}
