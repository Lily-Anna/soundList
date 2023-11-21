import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatTableModule} from '@angular/material/table';
import { SoundListComponent } from './sound-list.component';
import { Sound } from 'src/app/models/sound';

describe('SoundListComponent', () => {
  let component: SoundListComponent;
  let fixture: ComponentFixture<SoundListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatTableModule],
      declarations: [SoundListComponent]
    });
    fixture = TestBed.createComponent(SoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('должен создать компонент', () => {
    expect(component).toBeTruthy();
  });

  it('должен иметь правильный путь к папке со звуком', () => {
    expect(component.path).toBe('/assets/sound/');
  });

  it('должны иметь правильные отображаемые столбцы', () => {
    expect(component.displayedColumns).toEqual(['id', 'name', 'fileName']);
  });

  it('должны быть верные значения data source', () => {
    expect(component.dataSource).toEqual([
      { id: 1, name: 'Sound 1', fileName: 'acds-highway_to_hell.mp3' },
      { id: 2, name: 'Sound 2', fileName: 'bethovet-l.v.-lunnaya-sonata.mp3' },
      {
        id: 3,
        name: 'Sound 3',
        fileName: 'mocart-mocart-simfoniya-n40-chast-1-k-550-4-43.mp3',
      },
    ]);
  });

  it('должно начальное значение visible быть установлено на false', () => {
    expect(component.visible).toBeFalse();
  });

  it('должно начальное значение selectSound, быть установлено на undefined', () => {
    expect(component.selectSound).toBeUndefined();
  });

  it('Должно корректно переключать visibility and selectedsound', () => {
    const sound: Sound = { id: 1, name: 'Sound 1', fileName: 'acds-highway_to_hell.mp3' };

    component.OnOpenPlayer(sound);
    expect(component.visible).toBeTrue();
    expect(component.selectSound).toEqual(sound);

    component.OnOpenPlayer(sound);
    expect(component.visible).toBeFalse();
    expect(component.selectSound).toBeUndefined();
  });

  it('следует правильно переключать видимость visibility and selected sound для разных выбраных звуков', () => {
    const sound1: Sound = { id: 1, name: 'Sound 1', fileName: 'acds-highway_to_hell.mp3' };
    const sound2: Sound = { id: 2, name: 'Sound 2', fileName: 'bethovet-l.v.-lunnaya-sonata.mp3' };

    component.OnOpenPlayer(sound1);
    expect(component.visible).toBeTrue();
    expect(component.selectSound).toEqual(sound1);

    component.OnOpenPlayer(sound2);
    expect(component.visible).toBeTrue();
    expect(component.selectSound).toEqual(sound2);
  });
});
