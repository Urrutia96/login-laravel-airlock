export default {
    state: {
        currentUser: null
    },
    getters: {
        currentUser(state) {
            return state.currentUser
        }
    },
    mutations: {
        login(state, payload){
            state.currentUser = payload.data
        },
        logout(state){
            state.currentUser = null
        }
    },
    actions: {

    }
}