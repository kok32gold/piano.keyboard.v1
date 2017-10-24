import { Injectable, Inject } from '@angular/core';
import { Instruments } from './enums/instruments.enum';

@Injectable()
export class GlobalsService {
  private _instrument: string = Instruments[0];
  private _soundLength: number = 2;
  public keyboardRange: object = [
    {
      min: 3,
      max: 6
    },
    {
      min: 1,
      max: 4
    },
    {
      min: 4,
      max: 7
    },
    {
      min: 1,
      max: 2
    },
    {
      min: 2,
      max: 3
    },
    {
      min: 3,
      max: 4
    },
    {
      min: 4,
      max: 5
    },
    {
      min: 5,
      max: 6
    },
    {
      min: 6,
      max: 7
    },
    {
      min: 7,
      max: 8
    }


  ];
  private _currentKeyboard: any = this.keyboardRange[0];

  constructor(
  ) {

  }

  get soundLength() {
    return this._soundLength;
  }

  get instrument() {
    return this._instrument;
  }

  set instrument(i: string) {
    this._instrument = i;
  }

  getKeyboardArray(){
    let ka = [];
    for (let i = this._currentKeyboard.min; i <= this._currentKeyboard.max; i++) {
        ka.push(i);
    }
    return ka;
  }

  get currentKeyboard() {
    return this._currentKeyboard;
  }

  set currentKeyboard(obj) {
    this._currentKeyboard = obj;
  }
}
