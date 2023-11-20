import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.css']
})
export class SoundPlayerComponent {
  @Input()
  path!: string; 
  
}
