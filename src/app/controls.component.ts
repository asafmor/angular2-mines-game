import { Component, OnInit } from '@angular/core';
import { GameManager } from './gameManager'
import { assetsPath } from "app/config";
import { HotkeysService, Hotkey } from "angular2-hotkeys";

@Component({
	selector: 'controls',
	template: `
<table>
    <tr>
        <td></td>
        <td>
			<button class="btn btn-primary round raised gradient" (click)="game.stepUp()">
				<span class="fa fa-arrow-up fa-2x"></span>
			</button>
		</td>
        <td></td>
    </tr>
    <tr>
        <td>
			<button class="btn btn-primary round raised gradient" (click)="game.stepLeft()">
				<span class="fa fa-arrow-left fa-2x"></span>
			</button>
		</td>
        <td></td>
        <td>
			<button class="btn btn-primary round raised gradient" (click)="game.stepRight()">
				<span class="fa fa-arrow-right fa-2x"></span>
			</button>
		</td>
    </tr>
    <tr>
        <td></td>
        <td>
			<button class="btn btn-primary round raised gradient" (click)="game.stepDown()">
				<span class="fa fa-arrow-down fa-2x"></span>
			</button>
		</td>
        <td></td>
    </tr>
</table>
	`,
	styles: [`
	`]
})
export class ControlsComponent implements OnInit {

	public assetsPath = assetsPath;

	constructor(public game: GameManager, private hotkeysService: HotkeysService) {
		this.hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
			game.stepLeft();
			return false; // Prevent bubbling
		}, [], "Go Left"));
		this.hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
			game.stepRight();
			return false; // Prevent bubbling
		}, [], "Go Right"));
		this.hotkeysService.add(new Hotkey('up', (event: KeyboardEvent): boolean => {
			game.stepUp();
			return false; // Prevent bubbling
		}, [], "Go Up"));
		this.hotkeysService.add(new Hotkey('down', (event: KeyboardEvent): boolean => {
			game.stepDown();
			return false; // Prevent bubbling
		}, [], "Go Down"));
		this.hotkeysService.add(new Hotkey('enter', (event: KeyboardEvent): boolean => {
			game.play();
			return false; // Prevent bubbling
		}, [], "Restart Game"));
	}

	ngOnInit() {
	}

}
