import { TestBed, inject } from '@angular/core/testing';

import { PipService } from './pip.service';

describe('PipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PipService]
    });
  });

  it('should be created', inject([PipService], (service: PipService) => {
    expect(service).toBeTruthy();
  }));
});
