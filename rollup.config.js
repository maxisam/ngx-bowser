export default {
    entry: './dist/index.js',
    dest: './dist/bundles/ngxBowser.umd.js',
    format: 'umd',
    // Global namespace.
    moduleName: 'ngx.bowser',
    // External libraries.
    external: [
        '@angular/core',
        '@angular/common',
        'rxjs/Observable',
        'rxjs/Observer',
        'bowser'
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        'rxjs/Observable': 'Rx',
        'rxjs/Observer': 'Rx',
        'bowser': 'bowser'
    },
    onwarn: () => {
        return
    }
}