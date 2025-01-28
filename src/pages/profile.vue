<template>
  <main class="titel_page">
    <div class="content_left">
      <div class="title">
        <h1>User Profile</h1>
      </div>
      <div v-if="user">
        <img :src="user.image" alt="User  Image" class="user-image" />
        <p><strong>Name:</strong> {{ user.username }} {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
      <div v-else>
        <p>Loading user data...</p>
      </div>
      <div class="Button_Authoriz">
        <button @click="logout">Logout</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.$router.push("/login");
      return;
    }
    try {
      const response = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      });
      this.user = await response.json();
    } catch (error) {
      console.error("Ошибка при получении данных профиля:", error);
      this.$router.push("/login");
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
main {
  background-color: #FFFFFF;
  padding: 25px;
  height: 480px;
  padding-inline: 205px;
}
.text_title {
  color: #21243D;
  font-family: sans-serif;
}
.content_left {
  width: 500px;
  display: grid;
  gap: 40px;
}
.title h1 {
  font-size: 60px;
  font-family: sans-serif;
  color: #21243D;
  font-weight: bold;
}
.Button_Authoriz button {
  width: 200px;
  height: 50px;
  background-color: #FF6464;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  text-align: center;
  transition-duration: 0.4s;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.user-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
}
p {
  margin: 10px 0;
}
</style>