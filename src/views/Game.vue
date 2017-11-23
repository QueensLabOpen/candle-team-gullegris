<template>
    <section id="game">
      <div v-if="loading" class="loading">
        <h2>Waiting for game to start</h2>
      </div>
      <div v-else="" class="game">
        <div class="flame">
          <div class="frame" :class="!onFire ? 'targeted' : ''">

          </div>
        </div>
        <div class="candle">
          <img @click="lightCandle" src="../assets/ljus.png" alt="">
        </div>
      </div>
    </section>
</template>

<script>
    import {config} from '../config'
    export default {
      data () {
        return {
          loading: false,
          chosenVictim: 'a'
        }
      },
      methods: {
        getStream () {
          let evtSource = new EventSource(config.baseUrl + '/stream/123?stream=game')
          evtSource.onmessage = function (e) {
            console.log(e.data)
          }
        },
        lightCandle () {
          console.log('ITS LIT')
        }
      },
      computed: {
        onFire () {
          if (this.chosenVictim !== this.playerId) {
            return true
          } else {
            return false
          }
        },
        playerId () {
          return this.$store.getters.playerId
        }
      },
      mounted () {
        // this.getStream()
      }
    }
</script>

<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
  #game {
    width: 100%;
    height: 100%;
    position: relative;

    .loading {
      height: 100%;
      width: 100%;
    }

    .game {
      width: 100%;
      height: 100%;
      padding-top: 80px;

      .flame {

        .frame {
          background-image: url('../assets/flame/Flame-rak-liten.svg');
          background-position: center;
          background-repeat: no-repeat;
          width: 70px;
          height: 140px;
          margin: 0 auto;
          margin-bottom: -30px;

          &.targeted {
            background: none;
          }
        }
      }

      .candle {

        img {
          display: block;
          margin: 0 auto;
          width: 150px;
          padding: 0;
        }
      }
    }
  }
</style>
