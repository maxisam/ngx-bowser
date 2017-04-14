(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('bowser')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'bowser'], factory) :
	(factory((global.ngx = global.ngx || {}, global.ngx.bowser = global.ngx.bowser || {}),global.ng.core,global.bowser));
}(this, (function (exports,_angular_core,bowser) { 'use strict';

/**
 * @return {?}
 */
function _window() {
    // return the global native browser window object
    return window;
}
var WindowService = (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "nativeWindow", {
        /**
         * @return {?}
         */
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowService;
}());
WindowService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
WindowService.ctorParameters = function () { return []; };

var BowserService = (function () {
    /**
     * @param {?} _WindowService
     */
    function BowserService(_WindowService) {
        this._WindowService = _WindowService;
        this.bowserX = bowser;
    }
    /**
     * @param {?} ua
     * @return {?}
     */
    BowserService.prototype._detect = function (ua) {
        return this.bowserX._detect(ua);
    };
    /**
     * @param {?} versions
     * @return {?}
     */
    BowserService.prototype.compareVersions = function (versions) {
        return this.bowserX.compareVersions(versions);
    };
    /**
     * @param {?} minVersions
     * @param {?=} strictMode
     * @param {?=} ua
     * @return {?}
     */
    BowserService.prototype.isUnsupportedBrowser = function (minVersions, strictMode, ua) {
        return this.bowserX.isUnsupportedBrowser(minVersions, strictMode, ua);
    };
    /**
     * @param {?} minVersions
     * @param {?} strictMode
     * @param {?=} ua
     * @return {?}
     */
    BowserService.prototype.check = function (minVersions, strictMode, ua) {
        return this.bowserX.check(minVersions, strictMode, ua);
    };
    Object.defineProperty(BowserService.prototype, "bowser", {
        /**
         * @return {?}
         */
        get: function () {
            return this.bowserX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BowserService.prototype, "profile", {
        /**
         * @return {?}
         */
        get: function () {
            return this.bowserX.name + "-" + this.bowserX.version + " (" + this._WindowService.nativeWindow.navigator.userAgent + ")";
        },
        enumerable: true,
        configurable: true
    });
    return BowserService;
}());
BowserService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
BowserService.ctorParameters = function () { return [
    { type: WindowService, },
]; };

var BowserModule = (function () {
    function BowserModule() {
    }
    return BowserModule;
}());
BowserModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                providers: [BowserService, WindowService]
            },] },
];
/**
 * @nocollapse
 */
BowserModule.ctorParameters = function () { return []; };

exports.BowserModule = BowserModule;
exports.BowserService = BowserService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
