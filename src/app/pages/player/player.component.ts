import { Component } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  api: VgApiService | undefined;
  constructor(){

  }

  onPlayerSet(api: VgApiService){
    this.api = api
  }
}
