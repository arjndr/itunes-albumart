import fetch from 'isomorphic-unfetch'

interface Results {
  error?: {
    message: string
  }
  mini: string
  small: string
  medium: string
  largest: string
}

/**
 * Returns album artworks
 * @example
 * const artwork = await albumArt('MK', '17')
 * console.log(artwork.mini)
 */
const albumArt = (artist: string, album: string): PromiseLike<Results> => {
  return new Promise((resolve, reject) => {
    artist = artist.replace(/\s/g, '+').replace(/\&/g, '+')
    album = album.replace(/\s/g, '+').replace(/\&/g, '+')
    let resultJson: Results

    fetch(`https://itunes.apple.com/search?term=${artist}+${album}&limit=1&entity=song`)
      .then(res => res.json())
      .then(res => {
        if (res.resultCount === 0 || res.resultCount === '0') {
          // reject(new Error('iTunes Store returned with 0 results'))
          reject({
            error: {
              message: 'iTunes Store returned with 0 results'
            }
          })
        } else {
          resultJson = {
            mini: res.results[0].artworkUrl100,
            small: res.results[0].artworkUrl100.replace(/100x100/, '600x600'),
            medium: res.results[0].artworkUrl100.replace(/100x100/, '900x900'),
            largest: res.results[0].artworkUrl100.replace(/100x100/, '2000x2000')
          }
          resolve(resultJson)
        }
      })
      .catch(err => {
        reject('iTunes Store returned with 0 results')
        throw err
      })
  })
}

export default albumArt
export {
  Results
}
