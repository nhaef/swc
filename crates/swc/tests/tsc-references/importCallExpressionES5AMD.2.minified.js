//// [0.ts]
define([
    "require",
    "exports"
], function(require, exports) {
    function foo() {
        return "foo";
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), Object.defineProperty(exports, "foo", {
        enumerable: !0,
        get: function() {
            return foo;
        }
    });
});
//// [1.ts]
define([
    "require",
    "exports",
    "@swc/helpers/_/_class_call_check",
    "@swc/helpers/_/_interop_require_wildcard"
], function(require, exports, _class_call_check, _interop_require_wildcard) {
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var all = {
        get D () {
            return D;
        },
        get p2 () {
            return p2;
        }
    };
    for(var name in all)Object.defineProperty(exports, name, {
        enumerable: !0,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
    new Promise(function(resolve, reject) {
        return require([
            "./0"
        ], function(m) {
            return resolve(/*#__PURE__*/ _interop_require_wildcard._(m));
        }, reject);
    }), new Promise(function(resolve, reject) {
        return require([
            "./0"
        ], function(m) {
            return resolve(/*#__PURE__*/ _interop_require_wildcard._(m));
        }, reject);
    }).then(function(zero) {
        return zero.foo();
    });
    var p2 = new Promise(function(resolve, reject) {
        return require([
            "./0"
        ], function(m) {
            return resolve(/*#__PURE__*/ _interop_require_wildcard._(m));
        }, reject);
    }), D = /*#__PURE__*/ function() {
        function D() {
            _class_call_check._(this, D);
        }
        return D.prototype.method = function() {
            new Promise(function(resolve, reject) {
                return require([
                    "./0"
                ], function(m) {
                    return resolve(/*#__PURE__*/ _interop_require_wildcard._(m));
                }, reject);
            });
        }, D;
    }();
});
