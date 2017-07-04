import { Component, OnInit } from '@angular/core';
import { GameManager } from './gameManager'

@Component({
	selector: 'board',
	template: `
<div>
    <table cellspacing="0" cellpadding="0"
           style="padding: 0px; border-spacing: 0; border-collapse: collapse;">
        <tr height="32">
            <td>
				<i class="sprite sprite-edge_top_left"></i>
			</td>
            <td *ngFor="let n of [].constructor(game.boardSize)">
				<i class="sprite sprite-edge_top"></i>
			</td>
            <td>
				<i class="sprite sprite-edge_top_right"></i>
			</td>
        </tr>
        <tr height="64" *ngFor="let n of [].constructor(game.boardSize); let row=index">
            <td>
				<i class="sprite sprite-edge_left"></i>
			</td>
            <td *ngFor="let n of [].constructor(game.boardSize); let col=index">
				 <i class="sprite sprite-tile_grass" style="z-index: -1; position: fixed;"></i>
				 <i class="sprite" [ngClass]="getClass(row, col)" style="z-index: 1;"></i>
            </td>
            <td>
				<i class="sprite sprite-edge_right"></i>
			</td>
        </tr>
        <tr height="32">
            <td>
				<i class="sprite sprite-edge_bottom_left"></i>
			</td>
            <td *ngFor="let n of [].constructor(game.boardSize)">
				<i class="sprite sprite-edge_bottom"></i>
            </td>
            <td>
				<i class="sprite sprite-edge_bottom_right"></i>
			</td>
        </tr>
    </table>
</div>
	`,
	styles: [`
	`]
})
export class BoardComponent implements OnInit {

	constructor(public game: GameManager) { }

	ngOnInit() {
	}

	getClass(row: number, col: number) {
		const classes = {};
		classes[this.game.getTileImage(row, col)] = true;
		return classes;
	}

}
