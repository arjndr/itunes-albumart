import albumArt from '.'

test('Returns artwork', async () => {
  const art = await albumArt('MK', '17')
  expect(typeof art).toBe(typeof { json: 'bruh' })
})

test('Returns 0 results', async () => {
  try {
    await albumArt('Lauv', 'The Other (Ghosts Remix)')
  } catch (e) {
    expect(e.error!.message).toBe('iTunes Store returned with 0 results')
  }  
})

test('Artworks are different', async () => {
  const artwork = await albumArt('MK', '17')
  expect(artwork.mini == artwork.largest).toBeFalsy()
})
