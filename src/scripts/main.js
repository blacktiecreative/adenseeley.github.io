window.$ = require('jquery')

require('velocity')

$(function() {
    var body = $('body');
    var menus = $('.menu','.menu-side');
    $('.menu-toggle').bind('click', function(){
    	body.toggleClass('menu-open');
    	return false;
    }); 
});