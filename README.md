[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![travis build](https://img.shields.io/travis/maxisam/ngx-bowser.svg?style=flat-square)](https://travis-ci.org/maxisam/ngx-bowser)
[![npm](https://img.shields.io/npm/dt/ngx-bowser.svg?style=flat-square)](https://www.npmjs.com/package/ngx-bowser)
[![GitHub release](https://img.shields.io/github/release/maxisam/ngx-bowser.svg?style=flat-square)](https://github.com/maxisam/ngx-bowser/releases)
[![npm](https://img.shields.io/npm/l/ngx-bowser.svg?style=flat-square)]()

# ngx-bowser
A wrap service for [bowser](https://github.com/ded/bowser)

It works with angular version 2.0.0 and up

## Dependencies

+ Angular >=2.0.0
+ [bowser](https://github.com/ded/bowser)

## Install

You can get it on npm.

```
npm install ngx-bowser --save
```

## Build project

```
1. npm i

2. npm run build
```

### why ?

It is AoT compatible, so you don't need to worry about how to deal with 3rd party library with AoT.

It also comes with better type definition.

### How to use:

in ngModule:
```
 imports: [BowserModule],
 providers: [BowserService],
```

It provides all apis that bowser provides.

It also allows you to access bowser directly by `BowserService.bowser`

### Additional Features: 

1. `BowserService.profile`: return a string of "[browser]-[version] ([user agent])"

2. `BowserService.userAgent`: return window.navigator.userAgent