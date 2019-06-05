'use strict'
const test = require('ava')
const albumArt = require('./index.js')

test('returns a url', async t => {
  t.plan(1)
  const art = await albumArt('MK', '17')  
  t.is(typeof(art), typeof({'json': 'value'}), 'response is an Object')
})

test('rejects', async t => {
  return albumArt('Lauv', 'The Other (Ghosts Remix)').catch((err) => {
    t.is(err.message, 'iTunes Store returned with 0 results')
  })
})

test('different', async t => {
  const artwork = await albumArt('MK', '17')
  t.not(artwork.mini, artwork.largest, ' small and largest size are different URLs')
})
