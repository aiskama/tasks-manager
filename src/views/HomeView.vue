/* HomeView.vue */

<template>
  <div class="home-container">
    <h1>Добро пожаловать в диспетчер задач</h1>
    <p>Это простое приложение для управления задачами, созданное с помощью Vue.js</p>
    <router-link to="/tasks" class="btn">Перейти к задачам</router-link>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 100px;
}

h1 {
  font-size: 2em;
  color: #333;
}

p {
  color: #555;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
