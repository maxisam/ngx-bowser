import { WindowService } from './window.service';
import { Injectable } from '@angular/core';
import * as bowser from 'bowser';
export { bowser };
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
export { BowserService };
BowserService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
BowserService.ctorParameters = function () { return [
    { type: WindowService, },
]; };
function BowserService_tsickle_Closure_declarations() {
    /** @type {?} */
    BowserService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BowserService.ctorParameters;
    /** @type {?} */
    BowserService.prototype.bowserX;
    /** @type {?} */
    BowserService.prototype._WindowService;
}
//# sourceMappingURL=bowser.service.js.map