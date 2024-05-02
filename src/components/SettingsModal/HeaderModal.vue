<style scoped>
.modal-header {
    padding: 15px;
    display: flex;
}

.modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
    align-items: center;
}

.btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}
</style>

<template>
    <header class="modal-header">
        <slot name="header">
            Добавление пользователя

            <button type="button" class="btn-close" @click="close">
                x
            </button>
        </slot>
    </header>
</template>

<script>
export default {
    name: 'HeaderModal',
    methods: {
        close() {
            this.$emit('close');
        },
    },
}

</script>