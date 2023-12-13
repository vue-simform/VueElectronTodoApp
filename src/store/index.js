import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  plugins: [createPersistedState()],
  state: {
    tasks: [],
  },
  getters: {
    getTaskList: function (state) {
      return state.tasks;
    },
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push({"task":task});
      // window.api.send('refresh-window', true);
      // window.api.send('closeTaskForm', true);
    },
    deleteItem(state, index) {
      state = state.tasks.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {},
});
