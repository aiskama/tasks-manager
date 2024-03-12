// src/store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    editTask(state, { index, updatedTask }) {
      state.tasks.splice(index, 1, updatedTask);
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
    },
  },
  actions: {
    saveTasksLocally({ state }) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    loadTasksLocally({ commit }) {
      const localTasks = localStorage.getItem('tasks');
      if (localTasks) {
        commit('setTasks', JSON.parse(localTasks));
      }
    },
  },
});
