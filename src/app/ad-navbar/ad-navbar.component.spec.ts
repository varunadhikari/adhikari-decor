import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdNavbarComponent } from './ad-navbar.component';

describe('AdNavbarComponent', () => {
  let component: AdNavbarComponent;
  let fixture: ComponentFixture<AdNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
