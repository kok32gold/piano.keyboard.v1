import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Notes } from '../../enums/notes.enum';

// implements single key of the keyboard
@Component({
  selector: 'app-keyboard-key',
  templateUrl: './keyboard-key.component.html',
  styleUrls: ['./keyboard-key.component.css']
})
export class KeyboardKeyComponent implements OnInit {
  @Input() note: string;
  @Input() octave: number;
  @Input() play: Function;
  public isDiez: boolean = false; // indicate if this note have a diez key, public for ui access
  public isPlay: boolean = false; // indicate if the current key is playing, public for ui access
  public isPlayDiez: boolean = false; // indicate if the current key *diez* is playing, public for ui access

  constructor() {

  }

  ngOnInit() {
    // if the current note have diez key
    if (!/(B|E)/.test(this.note)) {
      this.isDiez = true;
    }
  }

  // play sounds use the keyboardPlayerService play function
  playSound(isDiez) {
    let playedNote = isDiez === true ? this.note + '#' : this.note;
    this.play(playedNote, this.octave);
    this.changeKeyColor(isDiez === true);
  }

  // change key color, uses js cause you can play with your computer keyboard
  changeKeyColor(isDiez){
    if(isDiez){
      // change the diez key class
      this.isPlayDiez = true;
      setTimeout(()=>{
        this.isPlayDiez = false;
      },150);
    }else{
      // change the note key class
      this.isPlay = true;
      setTimeout(()=>{
        this.isPlay = false;
      },150);
    }
  }

  // listener for the computer keyboard keypress
  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if(event.key.toLowerCase() === this.note.toLowerCase()){
      this.playSound(false);
    }
  }
}
