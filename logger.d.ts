
/**
 * The available options to set the Level of the Logger.
 * See {@link Logger}.
 */
export declare enum Level{ ERROR = 1, WARN = 2, INFO = 3, DEBUG = 4, LOG = 5 }

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
export declare class Options{
    level:Level;
    global:boolean;
    globalAs:string;
    store:boolean;
    storeAs:string;
}

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
export declare class Logger{

    level:Object;

    isErrorEnabled():boolean;
    isWarnEnabled():boolean;
    isInfoEnabled():boolean;
    isDebugEnabled():boolean;
    isLogEnabled():boolean;

    error(message?: any, ...optionalParams: any[]);
    warn(message?: any, ...optionalParams: any[]);
    info(message?: any, ...optionalParams: any[]);
    debug(message?: any, ...optionalParams: any[]);
    log(message?: any, ...optionalParams: any[]);

    global();

    store():Logger;

    unstore():Logger;

}

/**
 * Custom Providers if the user wants to avoid some configuration for common scenarios.
 * @type {Provider|Logger[]}
 */
export declare const ERROR_LOGGER_PROVIDERS:any[];
export declare const WARN_LOGGER_PROVIDERS:any[];
export declare const INFO_LOGGER_PROVIDERS:any[];
export declare const DEBUG_LOGGER_PROVIDERS:any[];
export declare const LOG_LOGGER_PROVIDERS:any[];