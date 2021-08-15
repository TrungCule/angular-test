import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './players/players.component';
import {FormsModule} from "@angular/forms";
import { PlayerDetailComponent } from './player-detail/player-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
