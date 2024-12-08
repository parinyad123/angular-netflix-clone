import { Component } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../contants/config';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  logoURL = LOGO_URL;
  bgUrl = BG_IMG_URL;
}
