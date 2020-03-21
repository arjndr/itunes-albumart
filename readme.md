# itunes-albumart
[![npm version](https://badge.fury.io/js/itunes-albumart.svg)](https://badge.fury.io/js/itunes-albumart)
[![Donatecoins](http://donatecoins.org/btc/1G4Aai7RiQeUnoHEzEUhzQnkxB2sa4DfqJ.svg)](http://donatecoins.org/btc/1G4Aai7RiQeUnoHEzEUhzQnkxB2sa4DfqJ)
![Tests](https://github.com/arjndr/itunes-albumart/workflows/Tests/badge.svg)

Simple album art grabbing library

Feel free to send PR and contribute

## Features

1. Apple iTunes Store search API under the hood
2. Multiple artwork sizes
3. Simple to use
4. Can be used as a CLI app too

## Install

`npm install itunes-albumart`

## API
`albumArt(artist, album)` - `function`
* `artist` - String : The artist name
* `album` - String : The album name

## CLI Usage
```
$ npm install itunes-albumart -g

$ itunes-albumart --help

Usage:
  $ itunes-albumart artist album writepath

Example
  $ itunes-albumart 'MK' '17' artwork.jpg
```

## Programmatic Usage
```js
const albumArt = require('itunes-albumart')
albumArt('MK', '17').then(console.log)
```

## License
This library uses Apple's [search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/). You should read Apple's legal [terms](https://www.apple.com/legal/internet-services/terms/site.html) for more.

[MIT](http://opensource.org/licenses/MIT) © 2018 - 2020 Akash Rajendra
