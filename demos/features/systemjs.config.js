/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

    var ngVer = '@2.0.0-rc.5'; // lock in the angular package version; do not let it float to current!

    //map tells the System loader where to look for things
    var  map = {
        'app':                        'app',
        '@angular':                   'https://npmcdn.com/@angular',
        'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
        'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',

        'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        'typescript':                 'https://npmcdn.com/typescript@1.8.0/lib/typescript.js',
        'angular2-logger':            '../../',
    };

    //packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
        'angular2-logger':            { defaultExtension: 'js' },
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'platform-browser',
        'platform-browser-dynamic',
    ];

    // Add map entries for each angular package
    // only because we're pinning the version with `ngVer`.
    ngPackageNames.forEach(function(pkgName) {
        map['@angular/'+pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
    });

    // Add package entries for angular packages
    ngPackageNames.forEach(function(pkgName) {
        // Bundled (~40 requests):
        packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    });

    var config = {
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'typescript',
        typescriptOptions: {
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        },
        map: map,
        packages: packages
    };

    System.config(config);

})(this);