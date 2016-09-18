/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'typescript',
        typescriptOptions: {
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        },
        paths: {
            // paths serve as alias
            // 'npm:': '../../node_modules'
        },
        // map tells the System loader where to look for things
        map: {
            'typescript':                 'https://npmcdn.com/typescript@1.8.0/lib/typescript.js',

            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'https://npmcdn.com/@angular/core/bundles/core.umd.js',
            '@angular/common': 'https://npmcdn.com/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'https://npmcdn.com/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'https://npmcdn.com/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'https://npmcdn.com/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'https://npmcdn.com/@angular/http/bundles/http.umd.js',
            '@angular/router': 'https://npmcdn.com/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'https://npmcdn.com/@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.12',
            'angular2-logger':            '../../',
            'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main',
                defaultExtension: 'ts'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-logger': {
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);