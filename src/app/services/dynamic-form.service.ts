import { Component, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Question } from './../models';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DynamicFormService {

    constructor(private http: Http) {
    }

    GetFormTemplate(/*templateName: string*/) : Observable<Question[]> {
        //TODO: fix the error here: this.result is undefined...

            return this.http.get('./app/services/template1.json')
                        .map(this.extractData)
                        .catch(this.handleError);

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

    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } 
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
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

}