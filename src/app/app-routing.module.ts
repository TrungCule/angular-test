import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import  {PlayerComponent} from "./players/players.component";

import {PlayerDetailComponent} from "./player-detail/player-detail.component";

const routes: Routes = [
  { path: 'players', component: PlayerComponent },
  { path: 'playerDetail/:id', component: PlayerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
