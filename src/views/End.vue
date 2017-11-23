<template xmlns:color="http://www.w3.org/1999/xhtml" xmlns:color="http://www.w3.org/1999/xhtml"
          xmlns:color="http://www.w3.org/1999/xhtml">
  <section id="end">
    <div>
      <h1>Game has ended</h1>
      <p>{{ gameResult }}</p>
    </div>
  </section>
</template>

<script>
    export default {
      data () {
        return {
        }
      },
      computed: {
        gameResult () {
          if (true) {
            return "You didn't lose!"
          } else {
            return "You lost"
          }
        }
      }
    }
</script>

<style rel="stylesheet/scss" type="text/css" lang="scss" scoped></style>
