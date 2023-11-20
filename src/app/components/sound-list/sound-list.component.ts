import { Component } from '@angular/core';
import { Sound } from 'src/app/models/sound';

const sounds: Sound[] = [
  { id: 1, name: 'Sound 1', fileName: 'acds-highway_to_hell.mp3' },
  { id: 2, name: 'Sound 2', fileName: 'bethovet-l.v.-lunnaya-sonata.mp3' },
  {
    id: 3,
    name: 'Sound 3',
    fileName: 'mocart-mocart-simfoniya-n40-chast-1-k-550-4-43.mp3',
  },
];

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.css']
})
export class SoundListComponent {
  path = '/assets/sound/';
  displayedColumns: string[] = ['id', 'name', 'fileName'];
  dataSource = sounds;
  visible: boolean = false;
  selectSound?: Sound;

  OnOpenPlayer(row: Sound) {
    if (this.selectSound != row) {
      this.visible = true;
      this.selectSound = row;
    } else {
      this.visible = false;
      this.selectSound = undefined;
    }
  }
}
