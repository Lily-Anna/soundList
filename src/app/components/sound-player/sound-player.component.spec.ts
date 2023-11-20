import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundPlayerComponent } from './sound-player.component';

describe('SoundPlayerComponent', () => {
  let component: SoundPlayerComponent;
  let fixture: ComponentFixture<SoundPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoundPlayerComponent]
    });
    fixture = TestBed.createComponent(SoundPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
