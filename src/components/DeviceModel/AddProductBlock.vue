<template>
    <div class="card block">
		<div class="card-body">
			<h5 class="card-title">Add Product</h5>
            <form>
                <div class="form-group">
					<input type="text" class="form-control" placeholder="Product Name" v-model="Name" required>
					<br>
					<input type="text" class="form-control" placeholder="Brand" v-model="BrandId" required>
					<br>
					<input type="number" class="form-control" placeholder="Type" v-model="TypeId" required>
                    <br>
					<input type="text" class="form-control" placeholder="Comment" v-model="Comment" required>
                    <br>
                    <input type="submit" class="btn btn-primary" value="Add" @click="submit">
				</div>
            </form>
		</div>
	</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from 'axios';
export default defineComponent({
    name:'AddProductBlock',
	props:["validation_key"],
	data(){
		return {
			Name:"",
			BrandId:"",
			TypeId:"",
			Comment:""
		}
	},
	methods:{
		submit():void{
			let api = "http://163.47.115.230:30000/api/devicemodel";
			let data = {
				Name: this.Name,
				BrandId: this.TypeId,
				TypeId: this.TypeId,
				Comment: this.Comment
			}
			console.log(data);
			let res = axios.post(api, data, {
				headers:{
					authorization: this.validation_key
				}
			})
			console.log(res);
			//console.log("success");
		}
	}

});
</script>