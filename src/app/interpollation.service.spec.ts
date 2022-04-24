import { TestBed } from '@angular/core/testing';

import { InterpollationService } from './interpollation.service';

describe('InterpollationService', () => {
  let service: InterpollationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterpollationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
