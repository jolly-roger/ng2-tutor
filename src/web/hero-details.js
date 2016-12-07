import 'rxjs/add/operator/switchMap';

import { Component, Input, Inject } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './services/hero';


@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>{{hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
      <button (click)="goBack()">Back</button>
    </div>
  `,
  styles: [`
               label {
      display: inline-block;
      width: 3em;
      margin: .5em 0;
      color: #607D8B;
      font-weight: bold;
    }
    input {
      height: 2em;
      font-size: 1em;
      padding-left: .4em;
    }
    button {
      margin-top: 20px;
      font-family: Arial;
      background-color: #eee;
      border: none;
      padding: 5px 10px;
      border-radius: 4px;
      cursor: pointer; cursor: hand;
    }
    button:hover {
      background-color: #cfd8dc;
    }
    button:disabled {
      background-color: #eee;
      color: #ccc; 
      cursor: auto;
    }
  `]
})
export class HeroDetailComponent {
    @Input() hero;
    
    constructor(
      @Inject(HeroService) heroService,
      @Inject(ActivatedRoute) route,
      @Inject(Location) location
    ) {
      this.heroService = heroService;
      this.route = route;
      this.location = location;
    }
    
    ngOnInit() {
      this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }
    
    goBack(): void {
      this.location.back();
    }
} 