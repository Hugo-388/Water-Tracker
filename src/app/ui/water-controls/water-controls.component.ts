import { Component, inject } from '@angular/core';
import { WaterTrackerService, } from '../../core/water-tracker.service';

@Component({
  selector: 'app-water-controls',
  standalone: true,
  imports: [],
  templateUrl: './water-controls.component.html',
  styleUrl: './water-controls.component.css',
})
export class WaterControlsComponent {

  private waterService = inject(WaterTrackerService);

  public onAdd() : void {
    this.waterService.ajouterVerre();
    }

    public onReset() : void {
      this.waterService.reset();
    }


}
