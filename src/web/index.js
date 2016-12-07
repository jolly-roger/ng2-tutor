import 'babel-polyfill';
import 'zone.js/dist/zone';

import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app';
import {HeroDetailComponent} from './hero-details';
import { HeroesComponent }     from './heroes';
import {DashboardComponent} from './dashboard';
import { HeroService } from './services/hero';
import { AppRoutingModule }     from './routing';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers:[
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);