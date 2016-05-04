import {Component} from '@angular/core';
import {Logger} from "angular2-logger/core";

@Component({
    selector: "hello-world",
    template: `
        <h1>Make sure your console is open.</h1>
        <h3>By default you should only see messages with a warning priority or higher.</h3>
        <button (click)="logMsgs()">Log Messages</button>
    `
})
export class HelloWorldComponent{

    constructor(private _logger:Logger){}

    logMsgs(){
        this._logger.error('This is a priority level 1 error message...');
        this._logger.warn('This is a priority level 2 warning message...');
        this._logger.info('This is a priority level 3 info message...');
        this._logger.debug('This is a priority level 4 debug message...');
        this._logger.log('This is a priority level 5 log message...');
    }

}