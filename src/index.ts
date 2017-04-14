import { WindowService } from './window.service';
import { BowserService } from './bowser.service';
import { NgModule } from '@angular/core';
export { bowser, BowserService } from './bowser.service';
export { WindowService } from './window.service';

@NgModule({
    providers: [BowserService, WindowService]
})
export class BowserModule {
}
