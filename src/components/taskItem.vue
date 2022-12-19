<template>
    <Transition name="task">
        <li :class="{ complete: task.complete }">
            <v-checkbox :hide-details="true" density="compact" @click="onCheck" :model-value="task.complete" :label="task.name"></v-checkbox>
        </li>
    </Transition>
</template>

<script>
export default {
    props: {
        task: Object,
        i: Number,
    },
    methods: {
        onCheck() {
            this.$store.dispatch('onCheck', this.i)
        }
    }
};
</script>