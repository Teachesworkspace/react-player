
      var createReactPlayer = require('./lib/ReactPlayer').createReactPlayer
      var Player = require('./lib/players/Youku').default
      module.exports = createReactPlayer([{
        key: 'youku',
        canPlay: Player.canPlay,
        lazyPlayer: Player
      }])
    