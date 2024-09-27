//importaciones propiedas de angular/js/ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importaciones de modulos
import { AppRoutingModule } from './app-routing.module';
import { HerosModule } from './heros/heros.module';
import { DbzModule } from './dbz/dbz.module';

//importaciones de componentes
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HerosModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
