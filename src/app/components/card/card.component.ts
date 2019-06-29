import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ElementId } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() caller: string;
  @Input() item: ElementId;
  @Output() deleteItem: EventEmitter<ElementId>;
  @Output() detailItem: EventEmitter<ElementId>;
  @Output() addItem: EventEmitter<ElementId>;
  @Output() itemId: EventEmitter<ElementId>;
  @Output() removeItem: EventEmitter<ElementId>;

  constructor() {
    this.deleteItem = new EventEmitter();
    this.detailItem = new EventEmitter();
    this.addItem = new EventEmitter();
    this.itemId = new EventEmitter();
    this.removeItem = new EventEmitter();
    // this.caller = '';
   }

  ngOnInit() {
     console.log('caller value: ', this.caller);
  }
  detail () {
    this.detailItem.emit(this.item);
  }
  remove (item: ElementId) {
    if ( this.item ) {
      for ( let i = 0; i < this.item.elements.length; i++) {
         if ( this.item.elements[i] === item) {
          // console.log('currentPlayList.element to delete: ', this.item.elements[i]);
          this.item.elements.splice(i, 1);
         }
  }
}
this.removeItem.emit( this.item );
}
  delete () {
    this.deleteItem.emit(this.item);
  }
  add () {
    // console.log('emitiendo elemento: ', this.item);
    this.addItem.emit(this.item);
  }

  sendItemId() {
    this.itemId.emit(this.item);
  }

  callerLists() {
    return this.caller === 'lists' ? true : false;
  }
  callerTvs() {
    return this.caller === 'tvs' ? true : false;
  }
  callerInsideTvs() {
    return this.caller === 'tvElement' ? true : false;
  }
  callerElement() {
    return this.caller === 'element' ? true : false;
  }
  callerListElement() {
    return this.caller === 'listElement' ? true : false;
  }

}
