import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcarsComponent } from './usedcars.component';

describe('UsedcarsComponent', () => {
  let component: UsedcarsComponent;
  let fixture: ComponentFixture<UsedcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
