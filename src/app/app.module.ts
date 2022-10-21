import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { MoviesWatchedComponent } from './movies-watched/movies-watched.component';
import { MoviesWant2watchComponent } from './movies-want2watch/movies-want2watch.component';
import { MoviesFavoritesComponent } from './movies-favorites/movies-favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    MoviesWatchedComponent,
    MoviesWant2watchComponent,
    MoviesFavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
