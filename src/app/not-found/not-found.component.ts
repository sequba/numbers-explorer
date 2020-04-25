import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-not-found',
  template: `
    <div class="d-flex justify-content-center align-items-center container">
      <div class="card p-1 p-sm-4 not-found-box">
        <h3 class="card-title text-center">Requested page not found</h3>
      </div>
    </div>
`,
  styles: [`
    .container {
      min-height: 100vh;
      min-width: 100vw;
    }

    .not-found-box {
      width: 30rem;
    }
  `]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
