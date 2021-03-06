import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Elemento } from '../../../../interfaces/element.interface';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  private CARPETA_FILES = 'lists';
  element: Elemento = {
    title : '',
    duration : 60,
    type: 'segundos'
  };

  types = [{
    text : 'segundos',
    value : 'segundos'
  },
  {
    text : 'minutos',
    value : 'minutos'
  },
  {
    text : 'horas',
    value : 'horas'
  },
  {
    text : 'años',
    value : 'años'
  }
];
  constructor(private _activatedRoute: ActivatedRoute,
    private _firestoreService: FirestoreService,
    private _router: Router) {
    this._activatedRoute.params.subscribe( params => {
      console.log(params);
      });
   }

  ngOnInit() {
  }
  guardar(forma: NgForm) {

    console.log('forma', forma);
    console.log('forma value', forma.value);
    console.log('usuario', this.element.duration);
    this.element.url = 'assets/list.png';
    this._firestoreService.guardarFile(this.element, this.CARPETA_FILES);
    this._router.navigate(['./lists']);
   }
}
