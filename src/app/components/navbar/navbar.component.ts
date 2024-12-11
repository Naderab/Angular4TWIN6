import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAdmin: boolean = false;
  constructor(private _auth:AuthService){}
  logout() {
    this._auth.logout();
  }
}
