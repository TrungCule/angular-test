import { Component, OnInit } from '@angular/core';
import {PLAYERS} from "../ds-players";
import { ActivatedRoute } from '@angular/router';
import {PlayerService} from "../player.service";
import {player} from "../player";
import { Location } from '@angular/common';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  players = PLAYERS;
  player: player | undefined;
  constructor(
    private route: ActivatedRoute,
    private   playerService: PlayerService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPlayer();
  }
  getPlayer(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.playerService.getPlayer(id)
      .subscribe(player => this.player = player);
  }
  goBack(){
    this.location.back();
  }

}
