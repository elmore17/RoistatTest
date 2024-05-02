<style scoped>
.btn {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 20px;
    cursor: pointer;
    width: 60pt;
    height: 20pt;
}
</style>

<template>

    <button @click="show" class="btn">{{ buttonName }}</button>

</template>

<script>
export default {
    name: 'Button',
    props: {
        buttonName: String,
        role: String
    },
    methods: {
        show() {
            this.$emit('show');
        }
    },
}
</script>