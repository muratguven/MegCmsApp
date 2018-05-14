import { Component, OnInit, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { Renderer3 } from '@angular/core/src/render3/interfaces/renderer';
import 'node_modules/admin-lte/plugins/iCheck/icheck.js';
// import '../../../assets/adminjs/login.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
