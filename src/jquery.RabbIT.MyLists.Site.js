/*
 * RabbIT.MyLists.Site
 * https://github.com/alan.delacanal/RabbIT.MyLists.Site
 *
 * Copyright (c) 2015 alan.delacanal
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.RabbIT_MyLists_Site = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.RabbIT_MyLists_Site = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.RabbIT_MyLists_Site.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.RabbIT_MyLists_Site.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].RabbIT_MyLists_Site = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
