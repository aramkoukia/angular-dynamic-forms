import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from './../../../models';

@Component({
    selector: 'dynamic-form',
    templateUrl: './app/components/dynamic-form/dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: Array<Question>;
    formGroup: FormGroup;
    payload: string

    ngOnInit() {

        this.questions = [
            {
                controlType: 'text-input',
                id: 'asdasd',
                label: 'My First',
                required: false,
                options: null,
                type: 'text',
                value: 'test'
            },
            {
                controlType: 'textarea',
                id: 'first',
                label: 'My First',
                required: false,
                options: null,
                type: 'text',
                value: 'test'
            },
            {
                controlType: 'text',
                id: 'second',
                label: 'Second!',
                required: true,
                options: null,
                type: 'text',
                value: 'test'
            }
        ];

        this.formGroup = this.generateForm(this.questions);

    }

    private generateForm(questions: Array<Question>): FormGroup {

        const formControls = questions.reduce(this.generateControl, {});

        return new FormGroup(formControls);

    }

    private generateControl(controls: any, question: Question) {

        if (question.required) {
            controls[question.id] = new FormControl(question.value || '', Validators.required);
        } else {
            controls[question.id] = new FormControl(question.value || '');
        }

        return controls;

    }

    submit() {
        this.payload = JSON.stringify(this.formGroup.value);
    }

}