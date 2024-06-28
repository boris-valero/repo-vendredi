<template>
    <div class="main">
      <h1>Inscription</h1>
      <img src="/smiley.jpeg" alt="smiley" class="photo">
      <div class="container">
      <form @submit.prevent="submitForm">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="form.username" required>
        </div>
        <br>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        <br>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="form.password" required>
        </div>
        <br>
        <div>
          <label for="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" v-model="form.confirmPassword" required>
        </div>
        <br>
        <button type="submit">Register</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>


  </template>
  <script>
  export default {
    data() {
      return {
        form: {
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        },
        error: null
      };
    },
    methods: {
      submitForm() {
        if (this.form.password !== this.form.confirmPassword) {
          this.error = "Passwords do not match";
          return;
        }
        // Here you would typically send the form data to your backend API.
        // For demonstration purposes, we'll just log the data to the console.
        console.log('Form Submitted', this.form);
        // Clear the form and error
        this.form.username = '';
        this.form.email = '';
        this.form.password = '';
        this.form.confirmPassword = '';
        this.error = null;
        alert('Registration successful!');
      }
    }
  }
  </script>

<style scoped>
.error {
  color: red;
}

h1{
  display: flex;
  justify-content: center;
}


.photo {
  display: flex;
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
  width : 20vw;
  aspect-ratio: 1/1;
}

.container {
  justify-content: center; /* Centre horizontalement */
  min-height: 100vh; /* Utilise au moins 100% de la hauteur de la fenêtre */
}
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

</style>
  