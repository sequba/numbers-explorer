import { TestBed } from '@angular/core/testing';

import { NumbersExtractorService } from './numbers-extractor.service';

describe('NumbersExtractorService', () => {
  let service: NumbersExtractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumbersExtractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
