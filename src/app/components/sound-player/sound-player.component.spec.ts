import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import { SoundPlayerComponent } from './sound-player.component';

describe('SoundPlayerComponent', () => {
  let component: SoundPlayerComponent;
  let fixture: ComponentFixture<SoundPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatCardModule],
      declarations: [SoundPlayerComponent]
    });
    fixture = TestBed.createComponent(SoundPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен создать компонент', () => {
    expect(component).toBeTruthy();
  });

  it('должен иметь правильный путь', () => {
    const expectedPath = 'path/to/audio/acds-highway_to_hell.mp3';
    component.path = expectedPath;
    fixture.detectChanges();
    const audioElement: HTMLAudioElement = fixture.nativeElement.querySelector('audio');
    expect(audioElement.src).toContain(expectedPath);
  });
});
