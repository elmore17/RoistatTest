<style scoped>
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-start;
}

.btn-green {
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

    <footer class="modal-footer">
        <slot name="footer">
            <button type="button" class="btn-green" @click="addtask">
                Сохранить
            </button>
        </slot>
    </footer>

</template>

<script>
export default {
    name: 'FooterModal',
    methods: {
        addtask() {
            this.$emit('addtask');
        },
    },
}

</script>