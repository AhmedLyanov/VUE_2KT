<template>
  <main class="titel_page">
    <div class="login-form">
      <h2 class="text_title">Authorization</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("token", data.accessToken);
          this.$router.push("/profile");
        } else {
          this.errorMessage = data.message || 'Ошибка авторизации';
        }
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        this.errorMessage = 'Ошибка сервера';
      }
    },
  },
};
</script>

<style scoped>
main {
  background-color: #ffffff;
  padding: 25px;
  height: 480px;
  padding-inline: 205px;
}
.text_title {
  color: #21243d;
  font-family: sans-serif;
}
.login-form {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.form-group {
  display: grid;
  justify-content: center;
  justify-items: center;
  margin-bottom: 15px;
}
label {
  text-align: left;
  font-family: sans-serif;
  color: gray;
}
input {
  width: 152px;
  height: 29px;
  border: 1px solid #ccc;
  border-radius: 50px;
}
button {
  color: gray;
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
}
.error-message {
  color: red;
  font-family: sans-serif;
  margin-top: 10px;
}
</style>