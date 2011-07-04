var $ = require('jquery-browserify');

module.exports = function (opts) {
    if (!opts) opts = {};
    if (!opts.mount) opts.mount = '';
    
    var div = $('<div>').css({
        'margin-right' : '5px',
        height : '40px',
        width : '200px'
    });
    
    var percent = $('<div>')
        .text('0%')
        .css({
            position : 'absolute',
            width : '190px',
            'font-weight' : 'bold',
            'z-index' : 10,
            'text-align' : 'center',
            'margin-top' : '8px'
        })
        .appendTo(div)
    ;
    
    var finished = $('<div>')
        .css({
            position : 'absolute',
            'overflow-x' : 'hidden',
            width : '0px',
            'z-index' : 1
        })
        .appendTo(div)
    ;
    var full = $('<img>')
        .attr('src', opts.mount + '/_progressify_full.png')
        .appendTo(finished)
    ;
    
    var remaining = $('<div>').appendTo(div);
    var empty = $('<img>')
        .attr('src', opts.mount + '/_progressify_empty.png')
        .appendTo(remaining)
    ;
    
    var self = {};
    self.fraction = function (n) {
        if (n === undefined) return complete / 100;
        else return div.percent(Math.floor(n * 100));
    };
    
    var complete = 0;
    self.percent = function (n) {
        if (n === undefined) return complete;
        
        if (n < 0) n = 0;
        if (n > 100) n = 100;
        complete = n;
        percent.text(n + '%');
        
        div.ready(function () {
            finished.width(Math.floor(n / 100 * remaining.width()));
        });
        
        return div;
    };
    
    self.element = div;
    self.appendTo = function () {
        div.appendTo.apply(div, arguments);
        return self;
    };
    
    return self;
};
