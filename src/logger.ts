
import {Injectable, Optional, provide} from "angular2/core";

/**
 * The available options to set the Level of the Logger.
 * See {@link Logger}.
 *
 */
export enum Level{ ERROR = 1, WARN = 2, INFO = 3, DEBUG = 4, LOG = 5 }

/**
 * Logger options.
 * See {@link Logger}.
 *
 * level - How much detail you want to see in the logs, 1 being the less detailed, 5 being the most. Defaults to WARN.
 * global - Whether you want the created logger object to be exposed in the global scope. Defaults to true.
 * globalAs - The window's property name that will hold the logger object created. Defaults to 'logger'.
 * store - Whether you want the level config to be saved in the local storage so it doesn't get lost when you refresh. Defaults to false.
 * storeAs - The local storage key that will be used to save the level config if the store setting is true. Defaults to 'angular2.logger.level'.
 */
export class Options{
    public level:Level;
    public global:boolean;
    public globalAs:string;
    public store:boolean;
    public storeAs:string;
}

//Temporal until https://github.com/angular/angular/issues/7344 gets fixed.
const DEFAULT_OPTIONS:Options = {
    level: Level.WARN,
    global: true,
    globalAs: 'logger',
    store: false,
    storeAs: 'angular2.logger.level'
};

/**
 * A JS Logger based on the Log4j library:
 * @see http://logging.apache.org/log4j/2.x/
 *
 * The Logger will skip printing in the console all the messages which are of a lower priority than the current set Level.
 * For example the logger has set the default Priority as Warn, which means it will print all error and warn messages, and
 * will skip info, debug and log messages.
 *
 * Levels of the messages hierarchy in order of importance:
 *
 * 1- error
 * 2- warn
 * 3- info
 * 4- debug
 * 5- log
 *
 * For specific configuration See {@link Options}.
 *
 * @author Armando Garcia.
 */
@Injectable()
export class Logger{

    private _level: Level;
    private _globalAs: string;
    private _store: boolean;
    private _storeAs: string;

    Level = Level;

    constructor( @Optional() options?: Options ){

        // Move this to the constructor definition when optional parameters are working with @Injectable: https://github.com/angular/angular/issues/7344
        let { level, global, globalAs, store, storeAs } = Object.assign( {}, DEFAULT_OPTIONS, options );

        this._level = level;
        this._globalAs = globalAs;
        this._storeAs = storeAs;

        global && this.global();

        if( store || this._loadLevel() ) this.store();

    }

    private _loadLevel = ():Level => localStorage.getItem( this._storeAs );
    private _storeLevel(level:Level){ localStorage[ this._storeAs ] = level; }

    error(message?: any, ...optionalParams: any[]){
        this.isErrorEnabled() && console.error( message, ...optionalParams );
    }

    warn(message?: any, ...optionalParams: any[]){
        this.isWarnEnabled() && console.warn( message, ...optionalParams );
    }

    info(message?: any, ...optionalParams: any[]){
        this.isInfoEnabled() && console.info( message, ...optionalParams );
    }

    debug(message?: any, ...optionalParams: any[]){
        this.isDebugEnabled() && console.debug( message, ...optionalParams );
    }

    log(message?: any, ...optionalParams: any[]){
        this.isLogEnabled() && console.log( message, ...optionalParams );
    }

    global = () => window[this._globalAs] = this;

    store():Logger {

        this._store = true;

        let storedLevel = this._loadLevel();
        if( storedLevel ){ this._level = storedLevel }
        else{ this._storeLevel( this.level ) }

        return this;

    }

    unstore():Logger{
        this._store = false;
        localStorage.removeItem( this._storeAs );
        return this;
    }

    isErrorEnabled = () => this.level >= Level.ERROR;
    isWarnEnabled = () => this.level >= Level.WARN;
    isInfoEnabled = () => this.level >= Level.INFO;
    isDebugEnabled = () => this.level >= Level.DEBUG;
    isLogEnabled = () => this.level >= Level.LOG;

    get level():Level{ return this._level; }

    set level(level:Level){
        this._store && this._storeLevel(level);
        this._level = level;
    }

}

/**
 * Custom Providers if the user wants to avoid some configuration for common scenarios.
 * @type {Provider|Logger[]}
 */
export const ERROR_LOGGER_PROVIDERS:any[] = [ provide( Options, { useValue: { level: Level.ERROR } } ), Logger ];
export const WARN_LOGGER_PROVIDERS:any[] = [ provide( Options, { useValue: { level: Level.WARN } } ), Logger ];
export const INFO_LOGGER_PROVIDERS:any[] = [ provide( Options, { useValue: { level: Level.INFO } } ), Logger ];
export const DEBUG_LOGGER_PROVIDERS:any[] = [ provide( Options, { useValue: { level: Level.DEBUG } } ), Logger ];
export const LOG_LOGGER_PROVIDERS:any[] = [ provide( Options, { useValue: { level: Level.LOG } } ), Logger ];

