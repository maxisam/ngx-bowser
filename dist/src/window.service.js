import { Injectable } from '@angular/core';
/**
 * @return {?}
 */
export function _window() {
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
export { WindowService };
WindowService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
WindowService.ctorParameters = function () { return []; };
function WindowService_tsickle_Closure_declarations() {
    /** @type {?} */
    WindowService.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    WindowService.ctorParameters;
}
//# sourceMappingURL=window.service.js.map