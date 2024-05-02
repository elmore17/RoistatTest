<style scoped>
.main-body{
  margin-top: 20px;
}
</style>

<template>

  <div class="main-body">
    <Button buttonName="Добавить" @show="showModal" />
    <Table />
    <Modal v-show="isModalVisible" @close="closeModal" @dataReceived="saveData" />
  </div>

</template>

<script>
import Button from './SettingsButton/ButtonShowModal.vue'
import Table from '../components/SettingsTable/App.vue'
import Modal from './SettingsModal/App.vue'
import { mapGetters } from 'vuex';
export default {
  name: 'MainWeb',
  components: {
    Button,
    Table,
    Modal
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  computed: {
    ...mapGetters(['getFormData']),
    formData() {
      return this.getFormData;
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    saveData(data) {
      this.$store.dispatch('saveFormData', data);
    }
  },
}
</script>