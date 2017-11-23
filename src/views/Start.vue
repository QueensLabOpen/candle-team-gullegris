<template>
  <section id="start">
    <h1>Candle Team <br>Gullegris</h1>
    <div class="actions">
      <a @click="createNewGame">Create a new game</a>
      <input v-model="intendedGame" placeholder="Game id">
      <a @click="joinGame">Join an existing game</a>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  import {config} from '../config'
  export default {
    data () {
      return {
        intendedGame: ''
      }
    },
    methods: {
      createNewGame () {
        console.log('POST: ' + config.baseUrl + '/create')
        axios.post(config.baseUrl + '/create')
          .then(r => {
            this.$store.commit('SET_PLAYER_ID', r.data.pid)
            this.$store.commit('SET_GAME_ID', r.data.gid)
            this.$store.commit('SET_GAME_OWNER')
            this.$router.push({ name: 'Game' })
          })
          .catch(e => {
            console.log(e)
          })
      },
      joinGame () {
        if (this.intendedGame !== '') {
          axios.post(config.baseUrl + '/join/' + this.intendedGame)
            .then(r => {
              this.$store.commit('SET_PLAYER_ID', r.data.pid)
              this.$store.commit('SET_GAME_ID', this.intendedGame)
              this.$router.push({ name: 'Game' })
            })
            .catch(e => {
              console.log(e)
            })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  #start {
    padding-top: 80px;
    width: 100%;
    height: 100%;
    h1 {
      font-size: 3rem;
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

    input {
      padding: 1em;
      width: 200px;
      margin: 1em auto;
    }
  }
</style>
