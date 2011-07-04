var connect = require('connect');

module.exports = function () {
    return connect.static(__dirname + '/static');
};
