<template>
    <section id="game">
      <div v-if="loading" class="loading">
        <h2>Waiting for game to start</h2>
      </div>
      <div v-else="" class="game">
        <div class="flame">

        </div>
        <div class="candle">

        </div>
      </div>
    </section>
</template>

<script>
    import {config} from '../config'
    export default {
      data () {
        return {
          loading: false
        }
      },
      methods: {
        getStream () {
          let evtSource = new EventSource(config.baseUrl + '/stream/123?stream=game')
          evtSource.onmessage = function (e) {
            console.log(e.data)
          }
        }
      },
      mounted () {
        this.getStream()
      }
    }
</script>

<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
  #game {
    width: 100%;
    height: 100%;

    .loading {
      height: 100%;
      width: 100%;
    }
  }
</style>
