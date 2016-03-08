System.register(["./src/logger"], function(exports_1) {
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (logger_1_1) {
                exportStar_1(logger_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=logger.js.map