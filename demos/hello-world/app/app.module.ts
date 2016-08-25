import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HelloWorldComponent }  from './hello-world.component';
import {Logger} from "angular2-logger/core";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ HelloWorldComponent ],
    bootstrap:    [ HelloWorldComponent ],
    providers:    [ Logger ]
})
export class AppModule { }