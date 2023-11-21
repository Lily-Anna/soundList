import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.css']
})
//Компонент отвечающий за воспроизведение музыки
export class SoundPlayerComponent {
  //Путь к аудиофайлу
  @Input()
  path!: string; 
  
}
