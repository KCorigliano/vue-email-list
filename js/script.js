var app = new Vue({
    el: '#app',
    data: {
      emails:[],
    },
    mounted() {
        for (let i=0; i<=9; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) =>{
                this.emails.push(result.data.response);
                console.log(this.emails)
            })
        };
    }
})