import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcActivityListComponent } from './cc-activity-list.component';

describe('CcActivityListComponent', () => {
  let component: CcActivityListComponent;
  let fixture: ComponentFixture<CcActivityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CcActivityListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CcActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
