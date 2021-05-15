<template>
	<div class="modal show-modal" :id="'modal_' + modal_id" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">{{title}}</h5>
				</div>
				<div class="modal-body">
					<p><strong>Brand:</strong> {{brand}}</p>
					<p v-if="info.DataType"><strong>Data Type:</strong> {{info.DataType}}</p>
					<p v-if="info.Description"><strong>Description:</strong> {{info.Description}}</p>
					<p v-if="info.DisplayName"><strong>Display Name:</strong> {{info.DisplayName}}</p>
					<p v-if="info.Model"><strong>Model:</strong> {{info.Model}}</p>
					<p v-if="info.Name"><strong>Name:</strong> {{info.Name}}</p>
				</div>
				<div class="modal-footer">
					<button class="btn btn-danger" :id="'close_modal_'+modal_id" @click="close_modal">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
	import axios from 'axios';
    export default defineComponent({
        name:'ProductModal',
        props:['modal_id', 'title', 'brand', 'validation_key'],
		data(){
			return {
				info:{}
			}
		},
        methods:{
            close_modal():void{
				//console.log('closing_modal');
                this.$emit('close_modal');
            }
        },
		async created(){
			//console.log("I am" + this.modal_id);
			//console.log(this.title);
			let api = "http://163.47.115.230:30000/api/overview/modeldata/" + this.brand + "/" + this.title+"/";
			//console.log(api);
			//console.log(this.validation_key);
			let res = await axios.get(api, {
				headers:{
					authorization:this.validation_key
				}
			});
			//console.log(res.data);
			if(res.data.length > 0){
				this.info = res.data[0];
			}
			//console.log(res.data[0]);
		}
    });
</script>

<style scoped>
    div.show-modal{
        display: block;
    }
    div.hide-modal{
        display:none;
    }
</style>