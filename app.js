const app = Vue.createApp({
    data(){
        return{
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            picture: '',
        }
    },
    methods: {
        async getUser(){ 
            const res = await fetch('https://randomuser.me/api/')
            const {results} = await res.json()

            console.log(results);
            
            this.firstName= results[0].name.firstName,
            this.lastName= results[0].name.lastName,
            this.email= results[0].email,
            this.gender= results[0].gender,
            this.picture= results[0].picture.large
        }
    }
})

app.mount('#app')