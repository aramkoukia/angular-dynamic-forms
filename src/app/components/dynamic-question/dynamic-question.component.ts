﻿import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from './../../models/index';

@Component({
    selector: 'dynamic-question',
    templateUrl: './app/components/dynamic-question/dynamic-question.component.html'
})

export class DynamicQuestionComponent {
    @Input() form: FormGroup;
    @Input() question: Question;

    get isValid(): boolean {
        return true;//this.form.controls[this.question.id].valid;
    }

}