$(function(){

  $('table').each(function(){
    if (!$(this).find('thead').length) {

      var headers = [];

      $(this).find('tbody tr').first().find('td').each(function(){
        headers.push($(this).text());
      }).parents('tr').remove();

      $(this).prepend('<thead><tr></tr></thead>');

      for (var i = headers.length - 1; i >= 0; i--) {
        $(this).find('thead tr').append('<th>' + headers[i] + '</th>');
      };

    }
  });

  $('table').each(function(){
    var table = $(this);
    var headers = [];
    table.find('th').each(function(){
      headers.push( $(this).text() );
    });

    var cells = table.find('tbody tr td');
    var cellsCount = table.find('thead th').length - 1;
    var a = 0;
    for (var i = 0; i < cells.length; i += 1) {
      cells[i].setAttribute('data-header', headers[a]);
      if (a === cellsCount) {
        a = 0;
      } else {
        a++;
      }
    }
  });

});
