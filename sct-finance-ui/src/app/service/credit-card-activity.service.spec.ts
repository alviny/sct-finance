import { TestBed } from '@angular/core/testing';

import { CreditCardActivityService } from './credit-card-activity.service';

describe('CreditCardActivityService', () => {
  let service: CreditCardActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
