progressify
===========

Hand-drawn progress bars for your webapps with browserify

![Computing... 80%](https://github.com/substack/node-progressify/raw/master/images/computing.png)

example
=======

server.js

````javascript
var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));

var browserify = require('browserify');
app.use(browserify({ entry : 'main.js' }));
app.use(require('progressify'));

app.listen(8080);
console.log('Listening on :8080');
````

main.js (browser-side)

````javascript
var progressify = require('progressify');
var $ = require('jquery-browserify');

$(window).ready(function () {
    var p = progressify().appendTo('#p');
    
    setInterval(function () {
        p.percent(p.percent() + 1);
    }, 50);
});
````

server-side
===========

Just `app.use(require('progressify'))` to mount the necessary static image
handlers using connect for the progress images.

browser-side
============

````javascript
var progressify = require('progressify');
````

var p = progressify(opts={})
----------------------------

Create a new progress object, loading resources from `opts.mount`.

To mount the resources someplace special you can do

````javascript
var p = progressify({ mount : '/special' })
````

in the browser and

````javascript
app.use('/special', require('progressify'));
````

Otherwise the resources are just mounted at '/'.

p.appendTo(...)
---------------

Calls the internal container div's `.appendTo()` with the arguments given.

Returns `p`.

p.percent(n)
------------

Set the percent complete. The floor of `n` will be clamped to between 0 and 100,
inclusive and used to render the percent bar.

Returns `p`.

p.percent()
-----------

Return the percent complete.

p.fraction(n)
-------------

Set the completeness as a floating value between 0 and 1, inclusive.

Returns `p`.

p.fraction()
------------

Return the percent complete as a value between 0 and 1, inclusive.

p.element
---------

Raw jquery handle on the container div
