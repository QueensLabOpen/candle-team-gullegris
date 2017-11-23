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
            console.log(r.data)
          })
          .catch(e => {
            console.log(e)
          })
      },
      joinGame () {
        if (this.intendedGame !== '') {
          axios.post(config.baseUrl + '/join/' + this.intendedGame)
            .then(r => {
              console.log(r.data)
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
    width: 100%;
    height: 100%;
    h1 {
      font-size: 3rem;
      color: #2c3e50;
    }

    a {
      display: block;
      width: 200px;
      background: #008cff;
      padding: 1em;
      color: #fff;
      margin: 0 auto;
    }

    input {
      padding: 1em;
      margin: 1em auto;
    }
  }
</style>
