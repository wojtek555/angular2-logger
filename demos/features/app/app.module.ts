import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoggerAppComponent }  from './logger-app.component';
import {Logger} from "angular2-logger/core";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ LoggerAppComponent ],
    bootstrap:    [ LoggerAppComponent ],
    providers:    [ Logger ]
})
export class AppModule { }