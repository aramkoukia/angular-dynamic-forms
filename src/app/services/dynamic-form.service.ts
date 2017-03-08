import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export class DynamicFormService {

    result: any;
    error: any;

    http: Http;
    //constructor(http: Http) {
    //    this.http = http;
    //}

    GetFormTemplates(): Object {
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
        //this.http.get('./TemplateNames.json').map((res: Response) => res.json()).subscribe(res => this.result = res);
        //return this.result;
    }

    GetFormTemplate(templateName: string): Object {
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
        //this.http.get('./' + templateName + '.json')
        //    .map((res: Response) => res.json())
        //    .subscribe(res => this.result = res, error => this.error = error);
        //return this.result;
    }


}