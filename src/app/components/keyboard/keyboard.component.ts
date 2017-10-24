import { Component, OnInit, Inject } from '@angular/core';

import { GlobalsService } from '../../globals.service';
import { KeyboardPlayerService } from '../../services/keyboard-player.service';

import { Notes } from '../../enums/notes.enum';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  public keyboardSet: any = null;
  public notesArr: any;
  public play: Function;

  constructor(
    @Inject(GlobalsService) public globals: GlobalsService,
    @Inject(KeyboardPlayerService) private keyboardPlayerService: KeyboardPlayerService
  ) {
    // gets the keys from the enum object
    this.notesArr = Object.keys(Notes).reduce(
      function(result, i) {
        if (/[A-G]/.test(i)) {
          result.push(i);
        }
        return result;
      }, []);

    // binds the function to the service - used  in sub components
    this.play = keyboardPlayerService.play.bind(keyboardPlayerService);
  }

  ngOnInit() {

  }

}
