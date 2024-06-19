$(document).ready(function() {
    $('.menu-toggle').click(function() {
      $('nav').toggleClass('active');
    });
    $('nav ul li a').click(function() {
      $('nav').removeClass('active');
    });
  });
  