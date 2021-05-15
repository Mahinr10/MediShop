<template>
    <div class="card block">
		<div class="card-body">
			<h5 class="card-title">{{product_info.Name}}</h5>
            <h6 class="card-title">Brand: {{product_info.BrandId}}</h6>
			<button class="btn btn-primary"  :id="'product_btn_' + product_info.id" @click="button_clicked">Details</button>
		</div>
	</div>
    <ProductModal :modal_id="product_info.id" :title="title" :brand="brand" :validation_key="validation_key" v-if="display_modal" v-on:close_modal="closeModal"/>
</template>

<script lang="ts">

import ProductModal from './ProductBlock/ProductModal.vue';
import {defineComponent} from 'vue';

export default defineComponent({
    props:['product_info', 'validation_key'],
    name:'ProductBlock',
    components:{ProductModal},
    data(){
        return {
            title:this.product_info.Name,
            brand:this.product_info.BrandId,
            display_modal:false
        }
    },
    methods:{
       button_clicked():void{
            this.display_modal = true;
        },
        closeModal():void{
            this.display_modal = false;
        }
    }
    
});
</script>

<style scoped>
    div.block {
        margin-top: 10px;
    }
</style>