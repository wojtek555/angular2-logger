import {bootstrap} from 'angular2/platform/browser';
import {HelloWorldComponent}   from './hello-world.component';
import {Logger} from "angular2-logger/core";

bootstrap(HelloWorldComponent,[
    Logger
]);