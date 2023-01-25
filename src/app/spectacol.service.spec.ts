import { TestBed } from '@angular/core/testing';

import { SpectacolService } from './spectacol.service';

describe('SpectacolService', () => {
  let service: SpectacolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpectacolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
