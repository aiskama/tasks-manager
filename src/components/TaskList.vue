<!-- Ваш файл src/components/TaskList.vue -->
<template>
  <div>
    <ul class="task-list">
      <li v-for="(task, index) in tasks" :key="index" class="task-list__item">
        <span>{{ task.title }}</span>
        <button @click="editTask(index)" class="task-list__button task-list__button--edit">Редактировать</button>
        <button @click="deleteTask(index)" class="task-list__button task-list__button--delete">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<style >
.task-list {
  list-style-type: none;
  padding: 0;
}

.task-list__item {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 5px;
}

.task-list__button {
  padding: 6px 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

.task-list__button--edit {
  background-color: #2196f3;
  color: white;
}

.task-list__button--delete {
  background-color: #f44336;
  color: white;
}
</style>


<script>
export default {
  props: ['tasks'],
  methods: {
    editTask(index) {
      this.$emit('editTask', index);
    },
    deleteTask(index) {
      this.$emit('deleteTask', index);
    },
  },
};
</script>
