import { Component, OnInit } from '@angular/core';
import { GameManager } from './gameManager'
import { assetsPath } from "app/config";

@Component({
	selector: 'board',
	template: `
<div>
    <table cellspacing="0" cellpadding="0"
           style="padding: 0px; border-spacing: 0; border-collapse: collapse;">
        <tr height="32">
            <td>
				<img [src]="assetsPath + 'edge_top_left.png'"/>
			</td>
            <td *ngFor="let n of [].constructor(game.boardSize)">
				<img [src]="assetsPath + 'edge_top.png'"/>
			</td>
            <td>
				<img [src]="assetsPath + 'edge_top_right.png'"/>
			</td>
        </tr>
        <tr height="64" *ngFor="let n of [].constructor(game.boardSize); let row=index">
            <td>
				<img [src]="assetsPath + 'edge_left.png'"/>
			</td>
            <td [style.background-image]="'url(' + assetsPath + 'tile_grass.png)'"
				 *ngFor="let n of [].constructor(game.boardSize); let col=index">
                <img [src]="game.getTileImage(row, col)" width="64" height="64"/>
            </td>
            <td>
				<img [src]="assetsPath + 'edge_right.png'"/>
			</td>
        </tr>
        <tr height="32">
            <td>
				<img [src]="assetsPath + 'edge_bottom_left.png'"/>
			</td>
            <td *ngFor="let n of [].constructor(game.boardSize)">
				<img [src]="assetsPath + 'edge_bottom.png'"/>
            </td>
            <td>
				<img [src]="assetsPath + 'edge_bottom_right.png'"/>
			</td>
        </tr>
    </table>
</div>
	`,
	styles: [`
	`]
})
export class BoardComponent implements OnInit {

	public assetsPath = assetsPath;

	constructor(public game: GameManager) { }

	ngOnInit() {
	}

}
