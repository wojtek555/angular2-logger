import {bootstrap} from 'angular2/platform/browser';
import {LoggerAppComponent} from "./logger-app.component";
import {Logger} from "angular2-logger/core";

bootstrap( LoggerAppComponent,[ Logger ]);