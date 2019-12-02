import { TestBed } from '@angular/core/testing';

import { LapizService } from './lapiz.service';

describe('LapizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LapizService = TestBed.get(LapizService);
    expect(service).toBeTruthy();
  });
});
