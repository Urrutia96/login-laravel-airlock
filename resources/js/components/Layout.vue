<template>
    <div class="flex-center position-ref full-height">
        
        <div class="top-right links">        
            <router-link v-if="isLogged" :to="{name:'home'}">Home</router-link>
            <router-link v-if="$route.name!= 'login' && !isLogged" :to="{name:'login'}">Login</router-link>
            <a v-if="isLogged" @click.prevent="logout">Logout</a>
        </div>
        

        <div class="content">            
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logout(){
            axios.post('/logout','').then(()=>{
                this.$store.commit('logout');
                this.$router.push({name:'login'})
            });
        }
    },
    computed: {
        isLogged(){
            if(this.$store.getters.currentUser===null)
                return false
            
            return true
        }
    },
}
</script>