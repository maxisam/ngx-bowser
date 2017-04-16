# ngx-bowser
A wrap service for [bowser](https://github.com/ded/bowser)

### why ?

It is AoT compatible, so you don't need to worry about how to deal with 3rd party library with AoT.

It also comes with better type definition.

### How to use:

in ngModule:
```
 imports: [ BowserModule],
 providers: [BowserService],
```

It provides all apis that bowser provides.

It also allows you to access bowser directly by `BowserService.bowser`

### Additional Features: 

1. `BowserService.profile`: return a string of "[browser]-[version] ([user agent])"

2. `BowserService.userAgent`: return window.navigator.userAgent