<template>
  <div class="tasks-view">
    <h2>Список задач</h2>
    <task-form
        :editingTaskIndex="editingTaskIndex"
        :taskTitle="taskTitle"
        @addTask="addTask"
        @saveEditedTask="saveEditedTask"
        @cancelEditing="cancelEditing"
    />
    <task-list :tasks="tasks" @editTask="editTask" @deleteTask="deleteTask" />
  </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  components: {
    TaskForm,
    TaskList,
  },
  data() {
    return {
      taskTitle: '',
      editingTaskIndex: -1,
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
  },
  mounted() {
    // Загрузка задач из локального хранилища при первоначальной загрузке страницы
    this.$store.dispatch('loadTasksLocally');

    // Добавляем обработчик события перед обновлением страницы
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  },
  beforeUnmount() {
    // Удаляем обработчик события при размонтировании компонента
    window.removeEventListener('beforeunload', this.handleBeforeUnload);

    // Сохраняем задачи перед размонтированием компонента
    this.$store.dispatch('saveTasksLocally');
  },
  methods: {
    handleBeforeUnload() {
      // Сохраняем задачи при обновлении страницы
      this.$store.dispatch('saveTasksLocally');
    },
    addTask(task) {
      this.$store.commit('addTask', task);
      this.$store.dispatch('saveTasksLocally');
    },
    editTask(index) {
      this.editingTaskIndex = index;
      this.taskTitle = this.tasks[index].title;
    },
    saveEditedTask({ index, title }) {
      if (index !== -1) {
        this.$store.commit('editTask', {
          index: index,
          updatedTask: { title: title },
        });
        this.cancelEditing();
      }
    },
    cancelEditing() {
      this.editingTaskIndex = -1;
      this.taskTitle = '';
    },
    deleteTask(index) {
      this.$store.commit('deleteTask', index);
      this.$store.dispatch('saveTasksLocally');
    },
  },
};
</script>

<style >
.tasks-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>











