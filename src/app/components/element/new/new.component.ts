import { Component, OnInit } from '@angular/core';

import { ElementsService } from 'src/app/services/elements.service';
import { FileModel } from 'src/app/models/file.model';
import { ElementModel } from 'src/app/models/element.model';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  estaSobreElemento = false;
  archivos: FileModel[] = [];
  element = new ElementModel();
  constructor(private elementService: ElementsService) {

   }

  ngOnInit() {
  }
  borrarElementos() {
  this.archivos = [];
  }
  cargarImagenes() {
    this.elementService.cargarImagenesFirebase(this.archivos);
  }
}
