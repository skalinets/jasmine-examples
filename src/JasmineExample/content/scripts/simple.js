var SimpleModule = (function () {
    var module = function () { };
    module.prototype = {
        add: function (x, y) {
            return x + y;
        },

        sub: function (x, y) {
            return x - y + 2;
        }
    };

    return module;
} ());