<template>
    <v-card class="todo pa-6">
        <h1 >Checklist</h1>
        <v-tabs v-model="tab" color="primary">
            <v-tab value="Pending" class="rounded-pill">Pending</v-tab>
            <v-tab value="Complete" class="rounded-pill">Complete</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="Pending">
                    <ul class="tasks">
                        <task-item v-for="(task, i) in tasks" v-bind:task="task" v-bind:i="i" :key="i"
                            v-show="!task.complete" />
                    </ul>
                </v-window-item>

                <v-window-item value="Complete">
                    <ul class="tasks">
                        <task-item v-for="(task, i) in tasks" v-bind:task="task" v-bind:i="i" :key="i"
                            v-show="task.complete" />
                    </ul>
                </v-window-item>
            </v-window>
        </v-card-text>
        <div>
            <v-text-field variant="solo" v-model="newTaskName" clearable v-on:keyup.enter="addTask"
                placeholder="New Task" type="text">
                <template v-slot:append>
                    <v-btn class="mt-n3" rounded="pill" size="x-large" @click="addTask" color="primary">Add Task</v-btn>
                </template>
            </v-text-field>
        </div>
    </v-card>
</template>

<script>
import taskItem from "./taskItem.vue";
export default {
    components: { taskItem },
    data() {
        return {
            newTaskName: "",
            tab: "Pending",
        };
    },
    computed: {
        tasks() {
            return this.$store.getters.tasks;
        },
    },
    methods: {
        addTask() {
            if (!this.newTaskName) return;

            this.$store.dispatch("addTask", this.newTaskName);
            this.newTaskName = "";
        },
    },
};
</script>
