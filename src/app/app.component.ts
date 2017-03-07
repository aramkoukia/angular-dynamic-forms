import { Component } from '@angular/core';
import { Question } from './../models';

@Component({
    selector: 'dynamic-form-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    questions: Array<Question>;

    constructor() {
        this.questions = [];
    }
}


//import { Component } from '@angular/core';

//@Component({
//    selector: 'my-app',
//    template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent { name = 'Angular'; }
