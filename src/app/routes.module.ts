import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementComponent } from './components/element/element.component';
import { TvComponent } from './components/tv/tv.component';
import { PlaylistComponent } from './components/playlist/playlist.component';


const routes: Routes = [
    {path: 'element', component: ElementComponent},
    {path: 'tvs', component: TvComponent},
    {path: 'playlists', component: PlaylistComponent},
    {path: '**', pathMatch: 'full' , redirectTo: 'tvs'}
    ];

    @NgModule({
        imports: [
          RouterModule.forRoot( routes )
        ],
        exports: [
          RouterModule
        ]
      })

      export class RoutesModule { }