import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaItemDetailComponent } from './agenda-item-detail.component';

describe('AgendaItemDetailComponent', () => {
  let component: AgendaItemDetailComponent;
  let fixture: ComponentFixture<AgendaItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
