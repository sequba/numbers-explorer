import { Component } from '@angular/core';

@Component({
  selector: 'next-root',
  template: `
    <div class="page-holder">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .page-holder {
      min-height: 100vh;
      min-width: 100vw;
      background: url("/assets/img/background.jpg");
      background-size: cover !important;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
    }
  `]
})
export class AppComponent {
  title = 'numbers-extractor';
}
