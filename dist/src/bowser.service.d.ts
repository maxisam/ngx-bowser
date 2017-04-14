import { WindowService } from './window.service';
import * as bowser from 'bowser';
export { bowser };
export declare type Flag = "a" | "x" | "c" | "android" | "bada" | "blink" | "blackberry" | "chrome" | "firefox" | "gecko" | "ios" | "msie" | "msedge" | "name" | "opera" | "phantom" | "safari" | "sailfish" | "seamonkey" | "silk" | "tizen" | "webkit" | "webos" | "chromeos" | "iphone" | "ipad" | "ipod" | "firefoxos" | "linux" | "mac" | "touchpad" | "version" | "windows" | "windowsphone";
export declare type bowserX = {
    [P in Flag]: string;
};
export declare class BowserService {
    private _WindowService;
    private bowserX;
    constructor(_WindowService: WindowService);
    _detect(ua: string): any;
    compareVersions(versions: string[]): number;
    isUnsupportedBrowser(minVersions: any, strictMode?: boolean, ua?: string): boolean;
    check(minVersions: any, strictMode: boolean, ua?: string): boolean;
    readonly bowser: bowserX;
    readonly profile: string;
}
