import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        friend: 0,
        friendList: [],
        chatList: []
    },
    getters: {
        getUser: (state) => {
            return state.user
        },
        getFriend: (state) => {
            return state.friend
        },
        getFriendlist: (state) => {
            return state.friendList
        },
        getChatlist: (state) => {
            return state.chatList
        }
    },
    mutations: {
        setUser: (state, u) => {
            state.user = u
        },
        setFriend: (state, f) => {
            state.friend = f
        },
        setFriendlist: (state, a) => {
            state.friendList = a
        },
        setChatlist: (state, a) => {
            state.chatList = a
        }
    },
    actions: {
        asynctUser: (context, u) => {
            context.commit('setUser', u)
        },
        asyncFriend: (context, f) => {
            context.commit('setFriend', f)
        },
        asyncFriendlist: (context, a) => {
            context.commit('setFriendlist', a)
        },
        asyncChatlist: (context, a) => {
            context.commit('setChatlist', a)
        }
    }
})
