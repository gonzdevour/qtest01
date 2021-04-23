<template>
  <div :id="containerId" style="width: 800px; height: 600px" />
</template>

<script>
export default {
  name: 'phaser3',
  data () {
    return {
      containerId: 'game-container',
      gameInstance: null
    }
  },
  mounted () {
    var self = this
    import('../../phaser3App/main.js').then(function (m) {
      self.gameInstance = m.launch(self.containerId)
    })
  },
  destroyed () {
    this.gameInstance.destroy(false)
  }
}
</script>
