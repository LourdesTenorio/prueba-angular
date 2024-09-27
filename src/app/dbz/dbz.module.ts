import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharactersComponent } from './components/characters/characters.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    CharactersComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
