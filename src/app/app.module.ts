import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GlobalsService } from './globals.service';

import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { KeyboardSettingsComponent } from './components/keyboard-settings/keyboard-settings.component';
import { KeyboardKeyComponent } from './components/keyboard-key/keyboard-key.component';

import { KeyboardPlayerService } from './services/keyboard-player.service';

@NgModule({
  declarations: [
    AppComponent,
    KeyboardComponent,
    KeyboardSettingsComponent,
    KeyboardKeyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    GlobalsService,
    KeyboardPlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
