import { WindowService } from './window.service';
import { BowserService } from './bowser.service';
import { NgModule } from '@angular/core';
export { bowser, BowserService } from './bowser.service';
export { WindowService } from './window.service';
var BowserModule = (function () {
    function BowserModule() {
    }
    return BowserModule;
}());
export { BowserModule };
BowserModule.decorators = [
    { type: NgModule, args: [{
                providers: [BowserService, WindowService]
            },] },
];
/**
 * @nocollapse
 */
BowserModule.ctorParameters = function () { return []; };
function BowserModule_tsickle_Closure_declarations() {
    /** @type {?} */
    BowserModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    BowserModule.ctorParameters;
}
//# sourceMappingURL=index.js.map