import {bootstrap} from '@angular/platform-browser-dynamic';
import {HelloWorldComponent}   from './hello-world.component';
import {Logger} from "angular2-logger/core";

bootstrap(HelloWorldComponent,[
    Logger
]);