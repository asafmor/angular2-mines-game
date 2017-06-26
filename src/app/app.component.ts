import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `


<div class="container">
    <h1>
      Hello {{name}}! This is {{title}}
    </h1>

  <ngb-alert *ngIf="successMessage" type="success" (close)="successMessage = null">{{successMessage}}</ngb-alert>

    <test></test>
</div>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'app';
  name = 'asaf';
  successMessage = "Hello World!";

  onClick(event) {
    console.dir(event);
  }
}
