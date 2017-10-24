import { Component, OnInit, Inject } from '@angular/core';
import { GlobalsService } from '../../globals.service';
import { KeyboardPlayerService } from '../../services/keyboard-player.service';
import { Instruments } from '../../enums/instruments.enum';

@Component({
  selector: 'app-keyboard-settings',
  templateUrl: './keyboard-settings.component.html',
  styleUrls: ['./keyboard-settings.component.css']
})
export class KeyboardSettingsComponent implements OnInit {
  public keyboardRange: any;
  public instrumentsArr: any;
  public currentKeyboard: any;
  public currentInstrument: any;

  constructor(
    @Inject(GlobalsService) private globals: GlobalsService,
    @Inject(KeyboardPlayerService) private keyboardPlayerService: KeyboardPlayerService
  ) {
    this.currentKeyboard = globals.currentKeyboard;
    this.currentInstrument = globals.instrument;
    this.keyboardRange = globals.keyboardRange;
    console.log(this.currentKeyboard, this.keyboardRange);

    this.instrumentsArr = Object.keys(Instruments).reduce(
      function(result, i) {
        if (/[A-Za-z]/.test(i)) {
          console.log(i);
          result.push(i);
        }
        return result;
      }, []);

  }

  ngOnInit() {

  }

  // returns the selected keyboard
  isKeyboardSelected(item){
    return item.min == this.globals.currentKeyboard.min && item.max == this.globals.currentKeyboard.max;
  }

  // change keyboard click event
  changeKeyboard(item){
    console.log(item);
    this.globals.currentKeyboard = item;
  }

  // change instrument click event
  changeInstrument(instrument){
    this.keyboardPlayerService.setNewInstrument(instrument);
  }
}
