import { Injectable } from '@angular/core';
import {PLAYERS} from "./ds-players";
import {player} from "./player";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players = PLAYERS;
  constructor() { }
  getPlayer(id: number): Observable<player>{
    const player = PLAYERS.find(p => p.id === id)!;
    return of(player);
  }
}
