import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'next-not-found',
  template: `
      <div class="card p-1 p-sm-4 not-found-box">
        <h3 class="card-title text-center">Requested page not found</h3>
      </div>
`,
  styles: [`
    .not-found-box {
      max-width: 30rem;
    }
  `]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
