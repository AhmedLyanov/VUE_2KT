<template>
  <main class="titel_page">
    <div class="login-form">
      <h2>Authorization</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Login</label>
          <input
            class="input_set"
            type="text"
            id="username"
            v-model="username"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            class="input_set"
            type="password"
            id="password"
            v-model="password"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="success" class="success-message">Login successful!</div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      username: "", 
      password: "", 
      error: null, 
      success: false, 
    };
  },
  methods: {
    async handleLogin() {
      this.error = null; 
      this.success = false; 

      try {
        
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

      
       
        const data = await response.json();

       
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);

       
        this.success = true;

 
        this.username = "";
        this.password = "";
      } catch (error) {
        console.error("Login error:", error);
        this.error = error.message || "Login failed. Please try again.";
      }


      if (!response.ok) {
          throw new Error("Invalid username or password");
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
.success-message {
  color: green;
  font-family: sans-serif;
  margin-top: 10px;
}
.titel_page {
  background-color: #ffffff;
  padding: 25px;
  height: 480px;
  padding-inline: 205px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 105px 0px 105px;
}
.login-form {
  width: 408px;
  height: 215px;
}
.login-form h2 {
  font-family: sans-serif;
}
</style>