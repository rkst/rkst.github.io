
//this triggers the resize when the window is pulled
jQuery(window).resize(function(){
  resize();
});


//the $ means on load
$(function() {
	resize();
});


//this is the funtion that is being used
function resize() {
	var _outerHeight = jQuery(window).height();
	jQuery('body').height(_outerHeight);
}
