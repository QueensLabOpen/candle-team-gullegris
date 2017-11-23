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
  export default {
    data () {
      return {
        intendedGame: ''
      }
    },
    methods: {
      createNewGame () {
        console.log('CLICKED: Create new game')
      },
      joinGame () {
        console.log('CLICKED: Join game')
      }
    }
  }
</script>

<style scoped lang="scss">
  #start {
    width: 100vw;
    height: 100vh;
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
