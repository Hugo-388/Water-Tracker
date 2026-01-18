import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WaterProgressComponent } from './ui/water-progress/water-progress.component';
import { WaterControlsComponent } from './ui/water-controls/water-controls.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WaterProgressComponent, WaterControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('water-tracker');
}
