<style scoped>
.row-table {
    cursor: pointer;
}

tr:hover {
    background-color: coral;
}

.el-name {
    display: flex;
    padding: 10px;
}
</style>

<template>
    <tbody>
        <tr @click="toggleChildren" class="row-table">
            <td class="el-name">
                <div v-if="showChildren">-</div>
                <div v-if="!showChildren">+</div>
                {{ user.name }}
            </td>
            <td>{{ user.phone }}</td>
        </tr>
        <UserRow v-if="showChildren" v-for="child in user.children" :key="child.id" :user="child" />
    </tbody>

</template>

<script>

export default {
    name: 'UserRow',
    props: ['user'],
    data() {
        return {
            showChildren: false
        };
    },
    methods: {
        toggleChildren() {
            this.showChildren = !this.showChildren;
        }
    }
}

</script>