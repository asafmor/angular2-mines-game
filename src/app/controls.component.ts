import { Component, OnInit } from '@angular/core';
import { GameManager } from './gameManager'
import { assetsPath } from "app/config";

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

	private assetsPath = assetsPath;

	constructor(private game: GameManager) { }

	ngOnInit() {
	}

}
