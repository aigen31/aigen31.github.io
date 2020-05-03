$(function() {
	jQuery(document).ready(function() {
        jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slow slideInUp',
        offset: 0
        });
        });
});
$(function(){
        document.querySelector(".menu-btn").onchange = function(){
                document.querySelector(".navigation").classList.toggle("checked", this.checked);
                document.querySelector("body").classList.toggle("menu", this.checked);
        }
});