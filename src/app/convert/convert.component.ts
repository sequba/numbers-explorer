import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-convert',
  template: `
    <div class="d-flex justify-content-center align-items-center container">
      <div class="card p-1 p-sm-4 content">

      </div>
    </div>
  `,
  styles: [`
    .container {
      min-height: 100vh;
      min-width: 100vw;
    }

    .content {
      width: 60rem;
    }
  `]
})
export class ConvertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
