import {createStore } from 'vuex'

const store = createStore({
    state: {
        tasks: [
            { name: 'create skeleton of task', complete: true },
            { name: 'add ability to add tasks', complete: true },
            { name: 'clear task name after clicking "Add"', complete: false },
            { name: 'put "Add" button in one line with input', complete: false },
            { name: 'add new task by hitting Enter instead of clicking "Add"', complete: false },
            { name: 'replace <input> with <ui-checkbox> in tasks list', complete: false },
            { name: 'when task is complete cross it out', complete: false },
            { name: 'split tasks into "pending" and "complete" tabs using keen-ui component <ui-tabs>', complete: false },
            { name: 'don\'t allow to add empty tasks', complete: false },
            { name: 'make list of tasks scrollable, if there\'re are a lot of tasks', complete: false },
            { name: 'extract list item into a separate vue.js component', complete: false },
            { name: 'persist tasks list in a local storage', complete: false },
            { name: 'add animation on task completion', complete: false },
        ],
    },
    mutations: {
        INIT_STORE(state) {
            if (localStorage.getItem('tasks')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('tasks')))
                );
            }
        },
        ADD_TASK(state, task) {
            state.tasks.push({
                name: task,
                complete: false
            })
        },
        ON_CHECK(state, i) {
           state.tasks[i].complete = !state.tasks[i].complete
        },
    },
    actions: {
        initStore({ commit }) {
            commit('INIT_STORE')
        },
        addTask({ commit }, task) {
            commit('ADD_TASK', task)
        },
        onCheck({ commit }, i) {
            commit('ON_CHECK', i)
        },
    },
    getters: {
        tasks: state => state.tasks,
        taskPending: state => state.tasks.filter((task) => !task.complete),
        taskComplete: state => state.tasks.filter((task) => task.complete)
    }

})

export default store;