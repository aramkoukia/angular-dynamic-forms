import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Question } from './../models';
@Injectable()
export class DynamicFormService {

    result: Array<Question>;
    response: Object;
    error: Object;

    constructor(private http: Http) {

    }

    GetFormTemplates(): Array<Question> {
        return [
           {
               "controlType": "text-input",
               "id": "asdasd",
               "label": "My First",
               "required": false,
               "options": null,
               "type": "text",
               "value": "test"
           },
           {
               "controlType": "textarea",
               "id": "first",
               "label": "My First",
               "required": false,
               "options": null,
               "type": "text",
               "value": "test"
           },
           {
               "controlType": "text",
               "id": "second",
               "label": "Second!",
               "required": true,
               "options": null,
               "type": "text",
               "value": "test"
           }
        ];
        //TODO: fix the error here: this.result is undefined...
        //this.http.get('./TemplateNames.json').map((res: Response) => res.json()).subscribe(res => this.result = res);
        //return this.result;
    }

    GetFormTemplate(templateName: string) {
        // return [
        //    {
        //        "controlType": "text-input",
        //        "id": "asdasd",
        //        "label": "My First",
        //        "required": false,
        //        "options": null,
        //        "type": "text",
        //        "value": "test"
        //    },
        //    {
        //        "controlType": "textarea",
        //        "id": "first",
        //        "label": "My First",
        //        "required": false,
        //        "options": null,
        //        "type": "text",
        //        "value": "test"
        //    },
        //    {
        //        "controlType": "text",
        //        "id": "second",
        //        "label": "Second!",
        //        "required": true,
        //        "options": null,
        //        "type": "text",
        //        "value": "test"
        //    }
        // ];
        //TODO: fix the error here: this.result is undefined...
        return this.http.get('./app/services/' + templateName + '.json',).map(res => res.json());
    }


}