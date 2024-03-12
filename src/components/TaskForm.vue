<!-- Ваш файл src/components/TaskForm.vue -->
<template>
  <div>
    <form @submit.prevent="submitForm" class="task-form">
      <label for="title" class="task-form__label">Название задачи:</label>
      <input v-model="localTaskTitle" type="text" id="title" class="task-form__input" required />
      <button type="submit" class="task-form__button">{{ localEditingTaskIndex === -1 ? 'Добавить задачу' : 'Сохранить задачу' }}</button>
      <button type="button" @click="cancelEditing" v-if="localEditingTaskIndex !== -1" class="task-form__button task-form__button--cancel">Отменить</button>
    </form>
  </div>
</template>

<style>
.task-form {
  margin-bottom: 20px;
}

.task-form__label {
  display: block;
  margin-bottom: 5px;
}

.task-form__input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.task-form__button {
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 5px;
}

.task-form__button--cancel {
  background-color: #f44336;
}
</style>


<script>
export default {
  props: ['editingTaskIndex', 'taskTitle'],
  data() {
    return {
      localTaskTitle: '',
      localEditingTaskIndex: -1,
    };
  },
  watch: {
    taskTitle: {
      immediate: true,
      handler(newVal) {
        this.localTaskTitle = newVal;
      },
    },
    editingTaskIndex: {
      immediate: true,
      handler(newVal) {
        this.localEditingTaskIndex = newVal;
      },
    },
  },
  methods: {
    submitForm() {
      if (this.localEditingTaskIndex === -1) {
        this.$emit('addTask', { title: this.localTaskTitle });
      } else {
        this.$emit('saveEditedTask', {
          index: this.localEditingTaskIndex,
          title: this.localTaskTitle,
        });
      }
      this.localTaskTitle = '';
      this.localEditingTaskIndex = -1;
    },
    cancelEditing() {
      this.$emit('cancelEditing');
    },
  },
};
</script>
