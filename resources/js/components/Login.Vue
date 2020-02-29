<template>
    <div>
        <div class="title m-b-md">
            Login
        </div>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" v-model="form.email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="form.password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form:{
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            axios.get('/airlock/csrf-cookie').then(() => {                
                axios.post('/login',this.form).then(response => {
                    this.$store.commit('login', response);
                    this.$router.push({name:'home'})
                }).catch(()=>{});
            });
        }
    },    
}
</script>