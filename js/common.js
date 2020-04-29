$(function() {
	jQuery(document).ready(function() {
        jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slow slideInUp',
        offset: 100
        });
        });
});