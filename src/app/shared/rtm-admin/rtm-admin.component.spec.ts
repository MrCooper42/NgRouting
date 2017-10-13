import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtmAdminComponent } from './rtm-admin.component';

describe('RtmAdminComponent', () => {
  let component: RtmAdminComponent;
  let fixture: ComponentFixture<RtmAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtmAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtmAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
