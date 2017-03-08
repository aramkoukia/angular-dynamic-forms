import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicQuestionComponent } from './components/dynamic-question/dynamic-question.component';
import { DynamicFormService } from './services/dynamic-form.service';


@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, FormsModule ],
    declarations: [AppComponent, DynamicFormComponent, DynamicQuestionComponent ],
    providers: [DynamicFormService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
