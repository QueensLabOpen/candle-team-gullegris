<template>
    <section id="game">
      <div v-if="loading" class="loading">
        <h2>Waiting for game to start</h2>
        <h3>Game ID: {{ $store.getters.gameId }}</h3>
        <a v-if="isOwner" @click="startGame">Start game</a>
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
    import axios from 'axios'
    import {config} from '../config'
    export default {
      data () {
        return {
          loading: true,
          chosenVictim: ''
        }
      },
      methods: {
        getStream () {
          let evtSource = new EventSource(config.baseUrl + '/stream' +
            '?stream=' + this.$store.getters.gameId, {withCredentials: true})
          evtSource.onopen = function (e) {
            console.log('Stream open')
            console.log(e)
          }
          evtSource.onmessage = function (e) {
            console.log(e.data)
          }
          evtSource.onerror = function (e) {
            console.log(e)
          }
          evtSource.addEventListener(this.$store.getters.gameId.toString(), (e) => {
            if (e.data === 'wait') {
              this.loading = true
            } else if (e.data === 'start') {
              this.loading = false
            } else if (e.data === 'gameover') {
              if (this.chosenVictim === this.$store.getters.playerId) {
                this.$store.commit('SET_WINNER')
              }
              this.$router.push({name: 'End'})
            } else {
              this.chosenVictim = parseInt(e.data)
            }
          })
        },
        lightCandle () {
          if (this.chosenVictim === this.playerId) {
            this.chosenVictim = ''
            axios.post(config.baseUrl + '/trigger/' + this.$store.getters.gameId +
              '/' + this.$store.getters.playerId)
              .then(() => {
              })
          }
        },
        startGame () {
          axios.post(config.baseUrl + '/start/' + this.$store.getters.gameId)
            .then(() => {
              axios.post(config.baseUrl + '/trigger/' + this.$store.getters.gameId +
              '/' + this.$store.getters.playerId)
            })
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
        },
        isOwner () {
          return this.$store.getters.gameOwner
        }
      },
      created () {
        this.getStream()
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
      padding-top: 90px;

      h2,h3 {
        color: #fff;
      }

      a {
        display: block;
        width: 200px;
        background: #008cff;
        padding: 1em;
        color: #fff;
        margin: 0 auto 2em;
      }
    }

    .game {
      width: 100%;
      height: auto;
      padding-top: 80px;
      position: absolute;
      bottom: 0;

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
