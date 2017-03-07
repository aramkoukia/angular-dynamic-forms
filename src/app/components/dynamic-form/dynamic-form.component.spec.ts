﻿import { TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicQuestionComponent } from './../dynamic-question/dynamic-question.component'; 

describe('Component: DynamicFormComponent', () => {
    let component: DynamicFormComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DynamicFormComponent, DynamicQuestionComponent],
            imports: [ReactiveFormsModule]
        });

        const fixture = TestBed.createComponent(DynamicFormComponent);
        component = fixture.componentInstance;
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

    it('should create a `FormGroup` comprised of `FormControl`s', () => {
        component.ngOnInit();
        expect(component.formGroup instanceof FormGroup).toBe(true);
    });

    it('should create a `FormControl` for each question', () => {
        component.questions = [
            {
                controlType: 'text',
                id: 'first',
                label: 'My First',
                required: false,
                options: null
            },
            {
                controlType: 'text',
                id: 'second',
                label: 'Second!',
                required: true,
                options: null
            }
        ];
        component.ngOnInit();

        expect(Object.keys(component.formGroup.controls)).toEqual([
            'first', 'second'
        ]);
    });

    it('should set the `payload` to a stringified version of our form values', () => {
        component.questions = [
            {
                controlType: 'text',
                id: 'first',
                label: 'My First',
                required: false,
                options: null
            },
            {
                controlType: 'text',
                id: 'second',
                label: 'Second!',
                required: true,
                options: null
            }
        ];
        component.ngOnInit();

        component.formGroup.controls['first'].setValue('pizza');
        component.submit();

        expect(component.payload).toEqual(JSON.stringify({ first: 'pizza', second: '' }));
    });


});