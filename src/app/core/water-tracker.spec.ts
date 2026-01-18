import { TestBed } from '@angular/core/testing';

import { WaterTrackerService } from './water-tracker.service';

describe('WaterTracker', () => {
  let service: WaterTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
