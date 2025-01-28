<template>
    <main class="titel_page">
        <div class="content_left">
            <div class="title">
                <h1>Home page</h1>
            </div>
            <div class="text_title">
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
            </div>
            <div class="Button_Authoriz">
                <router-link :to="{ name: 'login' }">
                    <button>Authorization</button>
                </router-link> 
                
               
            </div>
        </div>
        <div class="content_right">
            <div class="image_element">
                <picture>
                    <img src="../media/image.png" alt="">
                </picture>
            </div>
        </div>
    </main>
  </template>
  
  
  
  
  
  
  
  <style scoped>
  main{
    background-color: #FFFFFF;
    padding: 25px;
    height: 480px;
    padding-inline: 205px;
  }
  .text_title{
    color: #21243D;
    font-family: sans-serif;
  
  
  }
  .content_left{
    width: 500px;
    display: grid;
    gap: 40px;
  }
  .title h1{
    font-size: 60px;
    font-family: sans-serif;
    color: #21243D;
    font-weight: bold;
  }
  
  .Button_Authoriz button{
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
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
  
  .titel_page{
    background-color: #FFFFFF;
    padding: 25px;
    height: 480px;
    padding-inline: 205px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 105px 0px 105px;
  }
  </style>
  
  
  
  
  
  
  <script>
  
    export default {
   
    }
  </script>