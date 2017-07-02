import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HotkeyModule} from 'angular2-hotkeys';

import { AppComponent } from './app.component';
import { GameManager } from "app/gameManager";
import { StatusComponent } from "app/status.component";
import { FormsModule } from "@angular/forms";
import { ControlsComponent } from "app/controls.component";
import { BoardComponent } from "app/board.component";

@NgModule({
	declarations: [
		AppComponent,
		StatusComponent,
		ControlsComponent,
		BoardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		NgbModule.forRoot(),
		HotkeyModule.forRoot()
	],
	providers: [
		GameManager
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
