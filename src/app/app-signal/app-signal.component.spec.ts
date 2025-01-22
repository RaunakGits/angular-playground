import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSignalComponent } from './app-signal.component';

describe('AppSignalComponent', () => {
  let component: AppSignalComponent;
  let fixture: ComponentFixture<AppSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
