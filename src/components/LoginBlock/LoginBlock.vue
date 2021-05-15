<template>
	<h1 v-if="loggedIn">Log</h1>
    <div class="card block">
		<div class="card-body">
			<h5 class="card-title">Login</h5>
            <form>
                <div class="form-group">
					<input type="text" class="form-control" placeholder="Email" v-model="email" required>
					<br>
					<input type="password" class="form-control" placeholder="Password" v-model="password" required>
					<br>
                    <input type="submit" class="btn btn-primary" value="Login" @click="submit">
				</div>
            </form>
		</div>
	</div>
</template>

<script lang="ts">
	import {defineComponent, onBeforeMount} from 'vue';
	import axios from 'axios';
	export default defineComponent({
		data(){
			return {
				users:[],
				email:"",
				password:"",
				loggedIn:false
			}
		},
		props:['validation_key'],
		async created(){
			console.log('Login Created')
			let api = "http://163.47.115.230:30000/api/users";
			console.log(api);
			console.log(this.validation_key);
			let res = await axios.get(api, {
				headers:{
					authorization: this.validation_key
				}
			})
			this.users = res.data[0];
			console.log(res.data[0]);
		},
		methods:{
			submit():void{
				this.users.forEach(({email, password}) => {
					///console.log(email, password);
					if(email === this.email && password === this.password){
						this.$router.push({ path : '/modeltype' })
					}
					///setTimeout('', 5000);
				});	
				
			}
		}
		
	})
</script>