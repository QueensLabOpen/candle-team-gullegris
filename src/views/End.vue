<template xmlns:color="http://www.w3.org/1999/xhtml" xmlns:color="http://www.w3.org/1999/xhtml"
          xmlns:color="http://www.w3.org/1999/xhtml">
  <section id="end">
    <div>
      <h1>Game has ended</h1>
      <h3>{{ gameResult }}</h3>
    </div>
  </section>
</template>

<script>
    export default {
      data () {
        return {
          lost: false
        }
      },
      computed: {
        gameResult () {
          if (this.$store.getters.winner) {
            return "You didn't lose!"
          } else {
            return 'You lost'
          }
        }
      }
    }
</script>

<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
  #end {
    padding-top: 80px;
    color: #fff;

    h1 {
      font-size: 3rem;
    }
    h3 {
      font-size: 2.2rem;
    }
  }
</style>
