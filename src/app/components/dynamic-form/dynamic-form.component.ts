import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from './../../models';
import { DynamicFormService } from './../../services/dynamic-form.service';

@Component({
    selector: 'dynamic-form',
    templateUrl: './app/components/dynamic-form/dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: Array<Question>;
    formGroup: FormGroup;
    payload: string

    constructor(private dynamicFormService: DynamicFormService) {

    }

    ngOnInit() {

        let observable = this.dynamicFormService.GetFormTemplate('template1');

        observable.subscribe(data => function() { 
                            console.log(data), 
                            this.questions = data },
                    err => console.log(err),
                    () => console.log('Completed'));

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