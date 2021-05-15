<template>
    <product-block v-for="product in product_list" :key="product.id" :product_info="product" :validation_key="validation_key"/>
</template>

<script lang='ts'>
    import ProductBlock from '../components/ModelType/ProductBlock.vue';
    import {defineComponent} from 'vue';

    export default defineComponent({
        components:{ProductBlock},
        props: ["product_list", "validation_key"],
        
    })
</script>