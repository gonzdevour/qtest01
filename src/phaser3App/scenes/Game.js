import Phaser from 'phaser'

class Game extends Phaser.Scene {
  constructor () {
    super({
      key: 'game'
    })
  }

  preload () {
    // Load assets from assets folder
    this.load.image('classroom', 'classroom.png')
  }

  create () {
    console.log('Game')

    // Example of creating sprite/image
    this.add.image(400, 300, 'classroom')
  }

  update () { }
}
export default Game
