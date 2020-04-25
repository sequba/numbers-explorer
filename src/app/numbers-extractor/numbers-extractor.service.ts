import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersExtractorService {

  constructor() { }

  extractNumbers(data: string): number[] {
    const numericStrings = this.extractNumericStrings(data);
    const allNumbers = numericStrings.map(parseFloat).filter(isFinite);
    const sortedNumbers = [...new Set(allNumbers)].sort((a, b) => a - b);
    return sortedNumbers;
  }

  private extractNumericStrings(data: string): RegExpMatchArray {
    const numbersRegex = /-?\d+\.?\d*/g;
    return data.match(numbersRegex) || [];
  }

}
