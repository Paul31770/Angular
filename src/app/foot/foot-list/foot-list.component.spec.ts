import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootListComponent } from './foot-list.component';

describe('FootListComponent', () => {
  let component: FootListComponent;
  let fixture: ComponentFixture<FootListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
