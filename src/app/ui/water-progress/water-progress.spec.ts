import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterProgressComponent } from './water-progress.component';

describe('WaterProgressComponent', () => {
  let component: WaterProgressComponent;
  let fixture: ComponentFixture<WaterProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterProgressComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
