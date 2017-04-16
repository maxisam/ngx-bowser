import { WindowService } from './window.service';
import { Directive, ElementRef, Input, Output, EventEmitter, OnInit, OnDestroy, Injectable } from '@angular/core';
import * as bowser from 'bowser';

export { bowser };

export type Flag = "a" | "x" | "c" | "android" | "bada" | "blink" | "blackberry"
    | "chrome" | "firefox" | "gecko" | "ios" | "msie"
    | "msedge" | "name" | "opera" | "phantom" | "safari"
    | "sailfish" | "seamonkey" | "silk" | "tizen"
    | "webkit" | "webos" | "chromeos" | "iphone"
    | "ipad" | "ipod" | "firefoxos" | "linux" | "mac"
    | "touchpad" | "version" | "windows" | "windowsphone";

export type bowserX = {[P in Flag]: string};

@Injectable()
export class BowserService {
    private bowserX: any = bowser;
    constructor(
        private _WindowService: WindowService
    ) { }
    public _detect(ua: string): any {
        return this.bowserX._detect(ua);
    }
    public compareVersions(versions: string[]): number {
        return this.bowserX.compareVersions(versions);
    }
    public isUnsupportedBrowser(minVersions: any, strictMode?: boolean, ua?: string): boolean {
        return this.bowserX.isUnsupportedBrowser(minVersions, strictMode, ua);
    }
    public check(minVersions: any, strictMode: boolean, ua?: string): boolean {
        return this.bowserX.check(minVersions, strictMode, ua);
    }
    public get bowser(): bowserX {
        return this.bowserX;
    }
    public get profile(): string {
        return `${this.bowserX.name}-${this.bowserX.version} (${this._WindowService.nativeWindow.navigator.userAgent})`;
    }
    public get userAgent(): string {
        return this._WindowService.nativeWindow.navigator.userAgent;
    }
}
