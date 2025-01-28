<!-- App.vue -->


<template>
  <header class="Header_content">


    <router-link :to="{ name: 'home' }">
       Home
   </router-link>
   
   <router-link :to="{ name: 'users' }">
       Users
   </router-link>

   <router-link :to="{ name: 'profile' }">
       Profile
   </router-link>
    
  </header>

  <section>
    <router-view />
  </section>
  <footer>
    <div class="container_footer">
      <div class="logotypes_box">
        <img src="./media/fb.svg" alt="Logo1" class="logo">
        <img src="./media/Group.svg" alt="Logo2" class="logo">
        <img src="./media/insta.svg" alt="Logo3" class="logo">
        <img src="./media/Linkedin.svg" alt="Logo3" class="logo">
      </div>
      <p>Copyright ©2020 All rights reserved </p>
    </div>
  </footer>
</template>



<script>
    export default {
  data() {

  }
}
</script>




<style scoped>
.Header_content{
  margin: 0;
  border: 0;
  padding: 0;
  width: 100%;
  font-family: sans-serif;
  background-color: #ffffff;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.Header_content a{
  text-decoration: none;
  color:  black;
  font-family: sans-serif;
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
}

footer{
  height: 182px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.container_footer{
  font-family: sans-serif;
  color: #21243D;
  line-height: 70px;
  font-weight: bold;
  
}
.logotypes_box{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
 

}
</style>