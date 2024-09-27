import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent {
  @Output("Nuevo")
 public onNewCharacter: EventEmitter<Character>= new EventEmitter();
@Input()
 public character:Character={
    name:'Trunks',
    power:0
  }
   emitCharacter():void{
    console.log(this.character)

    if(this.character.name.length===0) return

    this.onNewCharacter.emit({...this.character})

    this.character.name="";
    this.character.power=0;
  }
}
