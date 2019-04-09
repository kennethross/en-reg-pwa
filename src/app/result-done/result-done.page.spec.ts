import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDonePage } from './result-done.page';

describe('ResultDonePage', () => {
  let component: ResultDonePage;
  let fixture: ComponentFixture<ResultDonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
