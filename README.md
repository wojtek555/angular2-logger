# Angular2-Logger
A simpler Log4j inspired logger for angular 2.

This is a work in progress and is not yet ready for production, use with care.

# Usage

Install the npm module.
    
    npm install --save angular2-logger

Setup the Provider.

    import {Logger} from "angular2-logger/logger";
   
    bootstrap( App, [ Logger ]); 

Inject the logger into your objects and use it.

    @Component({
        ...
    })
    export class App(){
        constructor(private _logger:Logger){
            this._logger.error('This is a priority level 1 error message...');
            this._logger.warn('This is a priority level 2 warning message...');
            this._logger.info('This is a priority level 3 warning message...');
            this._logger.debug('This is a priority level 4 debug message...');
            this._logger.log('This is a priority level 5 log message...');
        }
    }
    
By default the logger level will be set to `Level.WARN`, so you'll only see Warning and Error messages. 

In order to see all of them you just need to change the logger message hierarchy level, you can do so: 

- Dynamically using the console:

        logger.level = logger.Level.LOG; // same as: logger.level = 5;      
    
- Or changing the default configuration:

        import {Logger} from "angular2-logger/logger";
       
        bootstrap( App, [ LOG_LOGGER_PROVIDERS ]); 
    
    