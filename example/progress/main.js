var progressify = require('progressify');
var $ = require('jquery-browserify');

$(window).ready(function () {
    var p = progressify();
    p.appendTo($('#p'));
    
    var iv = setInterval(function () {
        var dx = Math.floor(Math.random() * 3);
        p.percent(p.percent() + dx);
    }, 100);
});
