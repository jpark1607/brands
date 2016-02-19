// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
  if ($(window).width() < 500) {
    $('.slider').slider({width: 320, height: 200, interval: 10000}); 
  }
  else {
    $('.slider').slider({width: 640, height: 400, interval: 10000});
  }
});
        
$(document).ready(function(){
  $(".dropdown-button").dropdown();
});
        
$(document).ready(function(){
  $(".button-collapse").sideNav();
});