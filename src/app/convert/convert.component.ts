import { Component, OnInit } from '@angular/core';
import { NumbersExtractorService } from '../numbers-extractor/numbers-extractor.service';

@Component({
  selector: 'next-convert',
  template: `
      <div class="card p-1 p-sm-4 content">
        <form action="javascript:void(0);" class="form">
          <div class="form-group">
            <label for="dataInput">Data:</label>
            <textarea #dataInput id="dataInput" class="form-control" maxlength="999999" cols="200" rows="5" required></textarea>
          </div>
          <div class="form-group">
            <label for="ageInput">Your age:</label>
            <input #ageInput id="ageInput" type="number" class="form-control" min="18" required>
          </div>
          <button (click)="convertData(dataInput.value, ageInput)" class="btn btn-primary">Convert</button>
        </form>
      </div>

      <ng-container *ngIf="extractedNumbers && extractedNumbers.length > 0">
        <div class="card p-1 p-sm-4 content">
          <table class="card-text table table-bordered table-sm">
            <thead><tr>
              <th>Extracted numbers</th>
            </tr></thead>
            <tbody><tr *ngFor="let number of extractedNumbers">
              <td>{{ number }}</td>
            </tr></tbody>
          </table>
        </div>
      </ng-container>
  `,
  styles: [`
    .content {
      max-width: 40rem;
      margin: 1rem;
    }

    textarea {
      resize: none;
    }
  `]
})
export class ConvertComponent implements OnInit {
  extractedNumbers: number[] = [];

  constructor(private extractor: NumbersExtractorService) { }

  convertData(data: string, input: any): void {
    this.extractedNumbers = [];
    this.extractedNumbers = this.extractor.extractNumbers(data);
  }

  ngOnInit(): void {
  }

}
