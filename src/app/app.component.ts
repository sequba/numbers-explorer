import { Component } from '@angular/core';

@Component({
  selector: 'next-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    header {
      background-image: url("assets/img/header.jpg");
      background-size: cover;
      background-position: 50% 30%;
    }
  `]
})
export class AppComponent {
  title = 'numbers-extractor';
}
