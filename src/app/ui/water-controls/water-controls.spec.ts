import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterControlsComponent } from './water-controls.component';

describe('WaterControlsComponent', () => {
  let component: WaterControlsComponent;
  let fixture: ComponentFixture<WaterControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterControlsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
