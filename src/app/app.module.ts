import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// firebase config
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// servicios

import { FirestoreService } from './services/firestore.service'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TvComponent } from './components/tv/tv.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ElementComponent } from './components/element/element.component';
import { NewComponent } from './components/element/new/new.component';
import { CreateComponent } from './components/playlist/create/create.component';
import { MytvComponent } from './components/mytv/mytv.component';
import { RoutesModule } from './routes.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TvComponent,
    PlaylistComponent,
    ElementComponent,
    NewComponent,
    CreateComponent,
    MytvComponent,
    CardComponent

  ],
  imports: [
    BrowserModule,
    RoutesModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    FirestoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
