import { Component, inject } from '@angular/core';
import { WaterTrackerService } from '../../core/water-tracker.service';

@Component({
  selector: 'app-water-progress',
  standalone: true,
  imports: [],
  templateUrl: './water-progress.component.html',
  styleUrl: './water-progress.component.css',
})
export class WaterProgressComponent {

  private waterService = inject(WaterTrackerService);

  public compteur = this.waterService.verres;


}
