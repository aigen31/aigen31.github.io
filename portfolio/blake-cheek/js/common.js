$(function(){
        document.querySelector(".menu-btn").onchange = function(){
                document.querySelector(".navigation").classList.toggle("checked", this.checked);
                document.querySelector("body").classList.toggle("menu", this.checked);
        }
});