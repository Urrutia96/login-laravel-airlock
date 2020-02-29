export function iniciar(store, router){
    //agregando los valores estaticos a axios
    axios.default.baseURL = 'login-laravel-airlock.test/';
    axios.default.withCredentials = true;

    //si la ruta pide estar autenticado este verfica si currentUser es null
    //para redireccionarlo al login
    router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (store.getters.currentUser === null) {
                next({path: '/login'})
            } else {
                next()
            }
        } else {
            next() // make sure to always call next()!
        }
    })

    

    //se hace una peticion a /api/user, si este devuelte un objeto
    //que contenga email se guardara con vuex
    axios.get('/api/user').then(response => {
        if(response.data){
            store.commit('login', response)
        }
    }).catch(()=>{});
}