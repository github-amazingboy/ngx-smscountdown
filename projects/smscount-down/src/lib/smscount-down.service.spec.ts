import { TestBed } from '@angular/core/testing';

import { SMSCountDownService } from './smscount-down.service';

describe('SMSCountDownService', () => {
  let service: SMSCountDownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMSCountDownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
