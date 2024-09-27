import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor(private dbzService:DbzService) {

  }

  get characters():Character[]{
    return this.dbzService.characters;
  }
  deleteById(id:string):void{
    this.dbzService.deleteById(id);
  }

  onNewCharacter(charcatrer:Character):void{
    this.dbzService.onNewCharacter(charcatrer);
  }
}
