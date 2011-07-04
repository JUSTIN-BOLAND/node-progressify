var progressify = require('progressify');
var $ = require('jquery-browserify');

$(window).ready(function () {
    var p = progressify().appendTo($('#p'));
    
    var iv0 = setInterval(function () {
        p.percent(p.percent() + 1);
        
        if (p.percent() === 100) {
            clearInterval(iv0);
            clearInterval(iv1);
            $('#done').text('done');
        }
    }, 50);
    
    var iv1 = setInterval(function () {
        if ($('#done').text() === ' ') {
            $('#done').text('_');
        }
        else {
            $('#done').text(' ');
        }
    }, 500);
});
