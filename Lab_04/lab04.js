$(document).ready(function() {
  $(function (){
    $('th#tableRow').click(function() {
      $(this).siblings().toggleClass('selected');
    });
  });

  $(function (){
    $('td').click(function () {
      $(this).toggleClass('selected');
    });
  });

  $(function () {
    $('th#tableCol').click(function () {
      var col = $(this).index();
        $("td").filter(":nth-child(" + (col + 1) + ")").toggleClass('selected');
    });
  });
});
