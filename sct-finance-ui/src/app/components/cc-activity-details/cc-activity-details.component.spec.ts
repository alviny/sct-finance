import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcActivityDetailsComponent } from './cc-activity-details.component';

describe('CcActivityDetailsComponent', () => {
  let component: CcActivityDetailsComponent;
  let fixture: ComponentFixture<CcActivityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcActivityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcActivityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
