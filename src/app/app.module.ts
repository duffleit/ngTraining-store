import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTrackComponent } from './add-track/add-track.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { TrackListComponent } from './track-list/track-list.component';
import { Store } from 'src/redux/store';
import { TrackHttpClient } from './html-client';

@NgModule({
  declarations: [AppComponent, TrackListComponent, ArtistListComponent, AddTrackComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TrackHttpClient, Store],
  bootstrap: [AppComponent],
})
export class AppModule {}