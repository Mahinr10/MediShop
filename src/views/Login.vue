<template>
  <LoginBlock :validation_key="validation_key"/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import LoginBlock from '../components/LoginBlock/LoginBlock.vue';

  export default defineComponent({
    name: 'Login',
    props:['validation_key', 'product_list'],
    components: {
      LoginBlock,
    },
    created(){
      console.log('created Login.vue');
      console.log('from Login.vue');
      console.log(this.validation_key);
    }
  });
</script>
