import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerId: '',
    gameId: '',
    gameOwner: false,
    winner: true
  },

  mutations: {
    SET_PLAYER_ID (state, playerId) {
      state.playerId = playerId
    },
    SET_GAME_ID (state, gameId) {
      state.gameId = gameId
    },
    SET_GAME_OWNER (state) {
      state.gameOwner = true
    },
    SET_WINNER (state) {
      state.winner = false
    }
  },

  getters: {
    playerId: state => state.playerId,
    gameId: state => state.gameId,
    gameOwner: state => state.gameOwner,
    winner: state => state.winner
  }
})
