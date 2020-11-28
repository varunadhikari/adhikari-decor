import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenBillComponent } from './gen-bill.component';

describe('GenBillComponent', () => {
  let component: GenBillComponent;
  let fixture: ComponentFixture<GenBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
