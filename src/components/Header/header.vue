<template>
    <div class="header">
		<h1>MediShop</h1>
	</div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';

    export default defineComponent ({
        name:'header'
    });
</script>

<style scoped>
    div.header {
        padding: 20px;
        background-color: cornsilk;
        color: crimson;
        font-family: fantasy;
        margin-top: 20px;
    }
</style>