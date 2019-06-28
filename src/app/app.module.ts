import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TvComponent } from './components/tv/tv.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ElementComponent } from './components/element/element.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TvComponent,
    PlaylistComponent,
    ElementComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
