import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementComponent } from './components/element/element.component';
import { TvComponent } from './components/tv/tv.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { MytvComponent } from './components/mytv/mytv.component';
import { NewComponent } from './components/element/new/new.component';
import { CreateComponent } from './components/playlist/create/create.component';


const routes: Routes = [
    {path: 'elements', component: ElementComponent},
    {path: 'tvs', component: TvComponent},
    {path: 'mytv', component: MytvComponent},
    {path: 'playlists', component: PlaylistComponent},
    {path: 'mytv', component: MytvComponent},
    {path: 'element/new', component: NewComponent},
    {path: 'playlist/create', component: CreateComponent},
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

      export class RoutesModule {}
