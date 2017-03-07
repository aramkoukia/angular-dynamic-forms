import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicQuestionComponent } from './components/dynamic-question/dynamic-question.component';


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule ],
    declarations: [ AppComponent , DynamicFormComponent, DynamicQuestionComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
