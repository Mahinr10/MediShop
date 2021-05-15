<template>
  <div class="container">
    <Header/>
    <router-link to="/devicemodel" class="margin-10px" v-if="isModelType">Add Product</router-link>
    <router-link to="/modeltype" class="margin-10px" v-if="isDeviceModel">Show Products</router-link>
    <router-view :product_list="products" :validation_key="validation_key" v-if="validation_key"/>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import Header from './components/Header/header.vue';
  import axios from 'axios';

  let login_api = "http://163.47.115.230:30000/api/login"; 
  let product_api = "http://163.47.115.230:30000/api/overview/modeltype";
  let validation_info = {
    "email": "Mozell.Jacobi@yahoo.com",
    "password": "password"
  }
  export default defineComponent({
    components: {Header},
    data(){
      return {
        users:[],
        products:[],
        validation_key:""
      }
    },
    async created(){
      try{
        let res = await axios.post(login_api, validation_info);
        this.validation_key = res.data.access_token;
        //console.log(res.data);
        //console.log('from app.vue');
        //console.log(this.validation_key);
        
        res = await axios.get(product_api, {
          headers:{
            authorization:this.validation_key
          }
        })
      //  console.log(res.data);
        this.products = res.data;
        
      }catch(e){
        //console.log(e);
      }
    },
    computed:{
      isModelType(){
        return this.$route.name === 'ModelType'; 
      },
      isDeviceModel(){
        return this.$route.name === 'DeviceModel';
      }
    }
  });
</script>

<style scoped>
  div.navbar-style{
    margin: 10px;
    background-color: antiquewhite;
  }
  li.nav{
    float: left;
    margin-left:10px;
  }
</style>

