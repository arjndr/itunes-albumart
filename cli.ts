'use strict'

import albumArt from './'
import meow from 'meow'
import fs from 'fs'
import http from 'http'

const cli = meow(`
  Usage:
    $ itunes-albumart artist album writepath

  Example
    $ itunes-albumart 'MK' '17' artwork.jpg
`)

if (cli.input[0] && cli.input[1]) {
  if (cli.input[2]) {
    albumArt(cli.input[0], cli.input[1]).then((done) => {
      var file = fs.createWriteStream((cli.input[2]))
      http.get((done.largest).replace(/https/g, 'http'), (res) => {
        res.pipe(file)
      })
    })
    
  } else {
    albumArt(cli.input[0], cli.input[1]).then(console.log)
  }
} else {
  console.log('Missing required parameters')
}
