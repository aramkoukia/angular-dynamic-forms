import { Component } from '@angular/core';
import { Question } from '../models';

@Component({
    selector: 'dynamic-form-app',
    template: require('./app.component.html')
})
export class AppComponent {
    questions: Array<Question>;

    constructor() {
        this.questions = [];
    }
}