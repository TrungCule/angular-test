import { Component, OnInit } from '@angular/core';
import {PLAYERS} from "../ds-players";

@Component({
  selector: 'app-player',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayerComponent implements OnInit {
  players = PLAYERS;
  constructor() { }

  ngOnInit(): void {
  }

}
