import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TvComponent } from './components/tv/tv.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ElementComponent } from './components/element/element.component';
import { NewComponent } from './components/element/new/new.component';
import { CreateComponent } from './components/playlist/create/create.component';
import { MytvComponent } from './components/mytv/mytv.component';
import { RoutesModule } from './routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TvComponent,
    PlaylistComponent,
    ElementComponent,
    NewComponent,
    CreateComponent,
    MytvComponent

  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
