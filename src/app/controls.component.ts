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
		this.registerKeyboard();
	}

	private registerKeyboard() {
		this.registerKey('left', () => { this.game.stepLeft(); }, "Step Left");
		this.registerKey('right', () => { this.game.stepRight(); }, "Step Right");
		this.registerKey('up', () => { this.game.stepUp(); }, "Step Up");
		this.registerKey('down', () => { this.game.stepDown(); }, "Step Down");
		this.registerKey('enter', () => { this.game.play(); }, "Restart Game");
	}

	private registerKey(key: string, action, description?: string) {
		this.hotkeysService.add(new Hotkey(key, (event: KeyboardEvent): boolean => {
			action();
			return false; // Prevent bubbling
		}, [], description));
	}

	ngOnInit() {
	}

}
