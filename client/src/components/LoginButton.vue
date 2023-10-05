<template>
    <div class="login-box">
      <p>Login på din Webdock.io bruger for at give feedback</p>
      <button @click="redirectToLogin">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      redirectToLogin() {
        // Udfør en omdirigering til din backend-login-rute (/login)
        // Her kan du også bruge Vue Router, hvis din applikation bruger routeren.
        window.location.href = 'http://localhost:8081/login'; // Ændre URL'en efter behov
      },
    },
  };
  </script>
  
  <style scoped>
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #f2f2f2; /* Baggrundsfarve */
    padding: 20px;
    width: 250px; /* Juster bredden efter behov */
    border: 1px solid #ccc; /* Ramme omkring boksen */
    border-radius: 5px; /* Afrundede kanter */
  }
  
  .login-box p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  .login-box button {
    padding: 10px 20px;
    background-color: #007bff; /* Baggrundsfarve for knappen */
    color: #fff; /* Tekstfarve for knappen */
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .login-box button:hover {
    background-color: #0056b3; /* Baggrundsfarve ved hover */
  }
  </style>
  