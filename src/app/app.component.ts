import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
<div class="container">
    <h1>Mines Game</h1>

	<status></status>

	<hotkeys-cheatsheet></hotkeys-cheatsheet>

	<table>
		<tr >
			<td valign="top" style="padding: 24px;">
				<controls></controls>
			</td>
			<td>
				<board></board>
			</td>
		</tr>
	</table>

</div>
	`,
	styles: [`
	`]
})
export class AppComponent {
}
