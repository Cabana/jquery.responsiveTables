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
