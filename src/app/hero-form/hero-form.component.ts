import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero-service.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers: string[];
  model: Hero;
  submitted = false;

  constructor(private _heroService: HeroService) {
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnInit() {
    this.powers = this._heroService.getPowers();
    this.model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

}
