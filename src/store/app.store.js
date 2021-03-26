// define app store actions names
export const ACTION_APP_SET_NUM_RESULTS_PER_PAGE = 'ActionAppSetNumResultsPerPage'
export const ACTION_APP_GET_USERS = 'ActionAppGetUsers'
export const ACTION_APP_GET_USER_DETAILS = 'ActionAppGetUserDetails'

// define app store mutations names
const SET_USERS = 'SetUsers'
const SET_ACTIVE_USER = 'SetActiveUser'
const SET_NUM_RESULTS_PER_PAGE = 'SetNumResultsPerPage'

// initial app state
const state = {
  activeUser: null,
  numResultsPerPage: 9,
  users: null
}

const getters = {
  getActiveUser(state) {
    return state.activeUser
  },
  getUsers(state) {
    return state.users
  },
  getNumPerPage(state) {
    return state.numResultsPerPage
  },
  getNumUsers(state) {
    return state.users.length
  }
}

// app store actions
const actions = {
  [ACTION_APP_SET_NUM_RESULTS_PER_PAGE](context, data) {
    context.commit(SET_NUM_RESULTS_PER_PAGE, data);
  },
  [ACTION_APP_GET_USERS](context) {
    return new Promise((resolve, reject) => {
      fetch("https://api.github.com/users")
        .then(response => response.json())
        .then(response => {
          context.commit(SET_USERS, response);
          resolve();
        }, error => {
          reject(error);
        })
    })
  },
  [ACTION_APP_GET_USER_DETAILS](context, login) {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(response => {
          context.commit(SET_ACTIVE_USER, response);
          resolve();
        }, error => {
          reject(error);
        })
    })
  }
}

// app store mutations
const mutations = {
  [SET_NUM_RESULTS_PER_PAGE](state, data) {
    state.numResultsPerPage = data
  },
  [SET_USERS](state, data) {
    state.users = data
  },
  [SET_ACTIVE_USER](state, data) {
    state.activeUser = data
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}