import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-welcome',
  template: `
      <div class="card p-1 p-sm-4 welcome-box">
        <h3 class="card-title text-center">Welcome</h3>
        <a routerLink="/convert" class="btn btn-primary">Convert Data</a>
      </div>
  `,
  styles: [`
    .welcome-box {
      width: 14rem;
    }
  `]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
