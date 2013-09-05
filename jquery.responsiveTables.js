;(function ( $, window, document, undefined ) {
  var pluginName = "responsiveTables",

  defaults = {};

  function Plugin ( element, options ) {
    this.element = element;
    this.settings = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {

    init: function () {
      var _this = this;
      var element = _this.element;

      if (_this.hasBadMarkup(element)) {
        _this.makeFirstRowHeader(element);
      }

      _this.setupHeaders(element);
    },

    hasBadMarkup: function(element) {
      if (!$(element).find('thead').length) {
        return true;
      }
    },

    makeFirstRowHeader: function(element) {
      var headers = [];

      $(element).find('tbody tr').first().find('td').each(function(){
        headers.push($(this).text());
      }).parents('tr').remove();

      $(element).prepend('<thead><tr></tr></thead>');

      for (var i = headers.length - 1; i >= 0; i--) {
        $(element).find('thead tr').append('<th>' + headers[i] + '</th>');
      };
    },

    headers: function(element) {
      var headers = [];
      $(element).find('th').each(function(){
        headers.push( $(this).text() );
      });
      return headers;
    },

    setupHeaders: function(element) {
      var cells = $(element).find('tbody tr td');
      var cellsCount = $(element).find('thead th').length - 1;
      var a = 0;
      for (var i = 0; i < cells.length; i += 1) {
        cells[i].setAttribute('data-header', this.headers(element)[a]);
        if (a === cellsCount) {
          a = 0;
        } else {
          a++;
        }
      }
    }

  };

  $.fn[ pluginName ] = function ( options ) {
    return this.each(function() {
      if ( !$.data( this, "plugin_" + pluginName ) ) {
        $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
      }
    });
  };
})( jQuery, window, document );
