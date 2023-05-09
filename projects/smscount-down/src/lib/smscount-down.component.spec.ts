import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSCountDownComponent } from './smscount-down.component';

describe('SMSCountDownComponent', () => {
  let component: SMSCountDownComponent;
  let fixture: ComponentFixture<SMSCountDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMSCountDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SMSCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
