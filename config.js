// const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const ConfigCheck = require('./app/config/ConfigCheck.js')
const feedList = require('./config-list.js')

let CONFIG = {
  publicURL: `https://democwise2016.github.io/action-UT-Podcast-Daily-202408/`,
  publicURLShorten: `https://rb.gy/h30k3f`,
  thumbnailBorderColor: 'E85D75',
  maxDownloadItemPerFeed: 5,
  maxDownloadFeed: 30,
  newArrialMax: 5,
  maxDownloadItems: 100,
  maxExcutionMinutes: 25,
  feedList
}

module.exports = ConfigCheck(CONFIG)
