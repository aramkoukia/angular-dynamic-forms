import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DynamicFormService {

    result: any;
    error: any;

    constructor(private http: Http) {

    }

    GetFormTemplates(): Object {
        //return [
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
        //];
        //TODO: fix the error here: this.result is undefined...
        this.http.get('./TemplateNames.json').map((res: Response) => res.json()).subscribe(res => this.result = res);
        return this.result;
    }

    GetFormTemplate(templateName: string): Object {
        //return [
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
        //];
        //TODO: fix the error here: this.result is undefined...
        this.http.get('./' + templateName + '.json')
            .map((res: Response) => res.json())
            .subscribe(res => this.result = res, error => this.error = error);
        return this.result;
    }


}