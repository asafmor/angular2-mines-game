import { Component, OnInit } from '@angular/core';
import { GameManager } from './gameManager'

@Component({
	selector: 'status',
	template: `
<div class="panel panel-default container">
		<div class="row align-items-center panel-body">
		
			<div class="col col-md-8">

				<!-- Board Size Selector -->
				<div style="display:inline-block;">
					Board Size:
				</div>
				<div style="display:inline-block; padding-right: 24px;">
					<select class="form-control" style="background-color: #f9f9f9;" [(ngModel)]="game.tiles">
							<option *ngFor="let n of game.numberOfTilesOptions" [ngValue]="n">{{n}}</option>
					</select>
				</div>

				<!-- Difficulty Level Selector -->
				<div style="display:inline-block;">
					Difficulty Level:
				</div>
				<div style="display:inline-block; padding-right: 24px;">
					<select class="form-control" style="background-color: #f9f9f9;" [(ngModel)]="game.difficultyLevel">
						<option *ngFor="let d of game.difficultyLevelOptions" [ngValue]="d">{{d}}</option>
					</select>
				</div>

				<!-- Play Button -->
				<div style="display:inline-block; padding-right: 24px;">
					<button class="btn btn-success btn-sm" (click)="game.play()">Play!</button>
				</div>

			</div>

			<div class="col-6 col-md-4 text-right" style=" vertical-align: middle;">

				<!-- Score Readout -->
				<div style="font-weight: bold; font-size: 24px; vertical-align: middle;">
					Score: {{game.score}}
				</div>

			</div>

		</div>
</div>
`,
	styles: [`
  `]
})
export class StatusComponent implements OnInit {

	constructor(public game: GameManager) { }

	ngOnInit() {
	}

}
