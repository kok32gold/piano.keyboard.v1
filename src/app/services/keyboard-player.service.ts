import { Injectable, Inject } from '@angular/core';
import { GlobalsService } from '../globals.service';

import { Instruments } from '../enums/instruments.enum';
declare var AudioSynth;
declare var Synth;

// responseble for the instrument Object play sounds and initiat the instrument with the settings.
// works in singleton archetecture for multiple ui's
@Injectable()
export class KeyboardPlayerService {
  public instrument: any;

  constructor(
    @Inject(GlobalsService) private globals: GlobalsService
  ) {
    // creating the audio object
    Synth instanceof AudioSynth;
    this.init();
  }

  // play sound by note and octave
  public play(note, octave) {
    this.instrument.play(note, octave, this.globals.soundLength);
  }

  // inits new instrument
  public init() {
    this.instrument = Synth.createInstrument(this.globals.instrument);
  }

  // sets the instrument and init
  public setNewInstrument(i: string){
    this.globals.instrument = i;
    this.init();
  }

  /*
   */
}
