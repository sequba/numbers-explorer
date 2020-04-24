import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-welcome',
  template: `
    <div class="d-flex justify-content-center align-items-center container">
      <div class="card p-1 p-sm-4 welcome-box">
        <h3 class="card-title text-center">Welcome</h3>
        <a routerLink="/convert" class="btn btn-primary">Convert</a>
      </div>
    </div>
  `,
  styles: [`
    .container {
      min-height: 100vh;
      min-width: 100vw;
    }

    .welcome-box {
      width: 12rem;
      background-color: rgba(255, 255, 255, 0.7)
    }
  `]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
