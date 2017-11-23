import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerId: '',
    gameId: ''
  },

  mutations: {
    SET_PLAYER_ID (state, playerId) {
      state.playerId = playerId
    },
    SET_GAME_ID (state, gameId) {
      state.gameId = gameId
    }
  },

  getters: {
    playerId: state => state.playerId,
    gameId: state => state.playerId
  }
})
