import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WaterTrackerService {
  
  private nbVerreDepart = parseInt(localStorage.getItem("nbVerre") ?? "0" , 10);  
  
  private readonly _verres = signal<number>(this.nbVerreDepart);

  public readonly verres = this._verres.asReadonly();

  constructor() {
    effect( () => localStorage.setItem("nbVerre",  this._verres().toString()));
  } 

  public ajouterVerre() : void {
    this._verres.update( v => v + 1);
  }

  public reset() : void {
    this._verres.set(0);
  }

}
