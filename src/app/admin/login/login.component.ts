import { Component, OnInit, Inject, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';
import 'src/assets/admin-lte/plugins/iCheck/icheck.js';
import 'src/assets/adminjs/login.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  '../../../assets/admin-lte/dist/css/AdminLTE.css',
'../../../assets/admin-lte/plugins/iCheck/all.css'
],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnDestroy {


  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'hold-transition');
    this.renderer.addClass(document.body, 'login-page');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'hold-transition');
    this.renderer.removeClass(document.body, 'login-page');
  }

}
