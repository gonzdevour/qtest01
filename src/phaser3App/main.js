import Phaser from 'phaser'
import Boot from './scenes/Boot.js'
import Game from './scenes/Game.js'

export function launch (containerId) {
  var config = {
    type: Phaser.AUTO,
    parent: containerId,
    width: 800,
    height: 600,
    scale: {
      mode: Phaser.Scale.ENVELOP,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: 0x333333,
    scene: [Boot, Game]
  }

  var game = new Phaser.Game(config)
  return game
}
