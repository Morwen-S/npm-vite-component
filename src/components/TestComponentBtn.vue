<template>
    <button @click="addCount" class="test-component-btn">
        <slot>
            {{ count }}
        </slot>
    </button>
</template>
<script lang="ts">
import Vue from "vue";


export default Vue.extend({
    name: "TestComponentBtn",
    data: () => ({
        count: 1
    }),
    methods: {
        addCount() {
            this.count++;
        }
    }
})

</script>

<style scoped>
.test-component-btn {
    outline: none;
    background: red;
    border: none;
    padding: 10px;
}
</style>