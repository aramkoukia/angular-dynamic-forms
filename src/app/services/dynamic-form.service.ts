import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export class DynamicFormsService {

    result: any;
    error: any;

    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    GetFormTemplates(): Object {
        this.http.get('./TemplateNames.json').map((res: Response) => res.json()).subscribe(res => this.result = res);
        return this.result;
    }

    GetFormTemplate(templateName: string): Object {
        this.http.get('./' + templateName + '.json')
            .map((res: Response) => res.json())
            .subscribe(res => this.result = res, error => this.error = error);
        return this.result;
    }


}