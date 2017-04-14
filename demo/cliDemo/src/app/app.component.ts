import { BowserService } from 'ngx-bowser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _BowserService: BowserService) {
  }
  title = this._BowserService.profile;
}
