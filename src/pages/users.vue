<template>
  <main class="titel_page">
    <div class="content_left">
      <div class="title">
        <h1>Users List</h1>
      </div>
      <button class="fetch-button" @click="fetchUsers" :disabled="loading">
        {{ loading ? 'Loading...' : 'Получить данные' }}
      </button>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-else>
        <ul class="user-list">
          <li v-for="user in users" :key="user.id" class="user-card">
            <div class="user-info">
              <img :src="user.image" :alt="user.firstName" class="user-image" />
              <div class="user-details">
                <h3>{{ user.firstName }} {{ user.lastName }}</h3>
                <p>{{ user.email }}</p>
                <p>{{ user.phone }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      users: [], 
      loading: false, 
      error: null,
    };
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      try {
      
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();

     
        this.users = data.users;
      } catch (error) {
        console.error('Error fetching users:', error);
        this.error = 'Ошибка при загрузке данных. Пожалуйста, попробуйте снова.';
      } finally {
   
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
main {
  background-color: #ffffff;
  padding: 25px;
  height: 100%;
  padding-inline: 205px;
}
.text_title {
  color: #21243d;
  font-family: sans-serif;
}
.content_left {
  width: 100%;
  display: grid;
  gap: 40px;
}
.title h1 {
  font-size: 60px;
  font-family: sans-serif;
  color: #21243d;
  font-weight: bold;
}
.fetch-button {
  width: 200px;
  height: 50px;
  background-color: #ff6464;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.4s;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.fetch-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.error-message {
  color: red;
  font-family: sans-serif;
  font-size: 18px;
}
.user-list {
  list-style-type: none;
  padding: 0;
  display: grid;
  gap: 20px;
}
.user-card {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.user-info {
  display: flex;
  align-items: center;
  gap: 20px;
}
.user-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
.user-details h3 {
  margin: 0;
  font-size: 24px;
  color: #21243d;
}
.user-details p {
  margin: 5px 0;
  font-size: 16px;
  color: #666;
}
</style>