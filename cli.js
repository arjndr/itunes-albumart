'use strict'
const albumArt = require('./index.js')
const meow = require('meow')
const fs = require('fs')
const http = require('http')
const cli = meow(`
  Usage:
    $ itunes-albumart artist album writepath

  Example
    $ itunes-albumart 'MK' '17' artwork.jpg
`)

if (cli.input[0] !== undefined && cli.input[1] !== undefined) {
  if (cli.input[2] === undefined) {
    albumArt(cli.input[0], cli.input[1]).then(console.log)
  } else {
    albumArt(cli.input[0], cli.input[1]).then((done) => {
      var file = fs.createWriteStream((cli.input[2]))
      http.get((done.largest).replace(/https/g, 'http'), (res) => {
        res.pipe(file)
      })
    })
  }
} else {
  console.log('Missing required parameters')
}
