import { TestBed } from '@angular/core/testing';

import { EntriesServiceService } from './entries-service.service';

describe('EntriesServiceService', () => {
  let service: EntriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
