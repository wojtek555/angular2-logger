import {Injectable, Optional} from "angular2/core";
import {Level} from "./level.ts";

/**
 * Logger options.
 * See {@link Logger}.
 *
 * level - How much detail you want to see in the logs, 1 being the less detailed, 5 being the most. Defaults to WARN.
 * global - Whether you want the created logger object to be exposed in the global scope. Defaults to true.
 * globalAs - The window's property name that will hold the logger object created. Defaults to 'logger'.
 * store - Whether you want the level config to be saved in the local storage so it doesn't get lost when you refresh. Defaults to false.
 * storeAs - The local storage key that will be used to save the level config if the store setting is true. Defaults to 'angular2.logger.level'.
 *
 * Created by Langley on 3/23/2016.
 *
 */
export class Options {
    level: Level;
    global: boolean;
    globalAs: string;
    store: boolean;
    storeAs: string;
}

// Temporal until https://github.com/angular/angular/issues/7344 gets fixed.
const DEFAULT_OPTIONS: Options = {
    level: Level.WARN,
    global: true,
    globalAs: "logger",
    store: false,
    storeAs: "angular2.logger.level"
};

@Injectable()
export class Logger {

    private _level: Level;
    private _globalAs: string;
    private _store: boolean;
    private _storeAs: string;

    Level = Level;

    constructor( @Optional() options?: Options ) {

        // Move this to the constructor definition when optional parameters are working with @Injectable: https://github.com/angular/angular/issues/7344
        let { level, global, globalAs, store, storeAs } = Object.assign( {}, DEFAULT_OPTIONS, options );

        this._level = level;
        this._globalAs = globalAs;
        this._storeAs = storeAs;

        global && this.global();

        if ( store || this._loadLevel() ) this.store();

    }

    private _loadLevel = (): Level => localStorage.getItem( this._storeAs );
    private _storeLevel(level: Level) { localStorage[ this._storeAs ] = level; }

    error(message?: any, ...optionalParams: any[]) {
        this.isErrorEnabled() && console.error( message, ...optionalParams );
    }

    warn(message?: any, ...optionalParams: any[]) {
        this.isWarnEnabled() && console.warn( message, ...optionalParams );
    }

    info(message?: any, ...optionalParams: any[]) {
        this.isInfoEnabled() && console.info( message, ...optionalParams );
    }

    debug(message?: any, ...optionalParams: any[]) {
        this.isDebugEnabled() && console.debug( message, ...optionalParams );
    }

    log(message?: any, ...optionalParams: any[]) {
        this.isLogEnabled() && console.log( message, ...optionalParams );
    }

    global = () => window[this._globalAs] = this;

    store(): Logger {

        this._store = true;
        let storedLevel = this._loadLevel();
        if ( storedLevel ) { this._level = storedLevel; }
        else { this._storeLevel( this.level ); }

        return this;

    }

    unstore(): Logger {
        this._store = false;
        localStorage.removeItem( this._storeAs );
        return this;
    }

    isErrorEnabled = (): boolean => this.level >= Level.ERROR;
    isWarnEnabled = (): boolean => this.level >= Level.WARN;
    isInfoEnabled = (): boolean => this.level >= Level.INFO;
    isDebugEnabled = (): boolean => this.level >= Level.DEBUG;
    isLogEnabled = (): boolean => this.level >= Level.LOG;

    get level(): Level { return this._level; }

    set level(level: Level) {
        this._store && this._storeLevel(level);
        this._level = level;
    }

}
