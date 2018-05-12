'use strict'
const request = require('ajax-request')
const fs = require('fs')
const albumArt = function(artist, album) {
  return new Promise((resolve, reject) => {
    artist = artist.replace(/\s/g, '+').replace(/\&/g, '+')
    album = album.replace(/\s/g, '+').replace(/\&/g, '+')
    var response_json = null
    request({
      method: 'GET',
      url: 'https://itunes.apple.com/search?term=' + artist + '+' + album + '&limit=1&entity=song',
    }, (err, res, body) => {
      if (err) {
        reject('iTunes Store returned with 0 results')
        throw err
      }
      body = JSON.parse(body)
      if (body.resultCount === 0 || body.resultCount === '0') {
        reject(new Error('iTunes Store returned with 0 results'))
      } else {
        response_json = {
          'mini': body.results[0].artworkUrl100,
          'small': body.results[0].artworkUrl100.replace(/100x100/, '600x600'),
          'medium': body.results[0].artworkUrl100.replace(/100x100/, '900x900'),
          'largest': body.results[0].artworkUrl100.replace(/100x100/, '2000x2000')
        }
        resolve(response_json)
      }
    })
  })
}

module.exports = albumArt
