import { Component, DoCheck } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  isLogged!: Boolean;
  constructor(private _auth: AuthService) {
    this.isLogged = this._auth._isLogged();
  }
  ngDoCheck(): void {
    this.isLogged = this._auth._isLogged();
  }
  title = 'Project4TWIN6';
}
