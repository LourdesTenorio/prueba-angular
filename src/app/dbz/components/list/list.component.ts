import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  @Input("Personaje")
  public characterList :Character[]=[
    {
      name:'Trukns',
      power:10
    }
  ]
  @Output("Borrar")
  onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(indice:number):void{
  //   console.log("Borrando personaje: ", indice)
  //   this.onDelete.emit(indice);
  // }
  onDeleteCharacter(id:string):void{
    console.log("Borrando personaje: ", id)
    this.onDelete.emit(id);
  }
}
