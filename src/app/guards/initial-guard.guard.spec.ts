import { TestBed } from '@angular/core/testing';

import { InitialGuardGuard } from './initial-guard.guard';

describe('InitialGuardGuard', () => {
  let guard: InitialGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InitialGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
