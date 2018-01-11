import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  private _powers: string[];
  constructor() {
    this._powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  }

  getPowers(): string[] {
    return this._powers;
  }

}
