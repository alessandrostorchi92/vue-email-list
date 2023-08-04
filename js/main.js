"use strict"

// Consegna: Attraverso l’apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Vue.createApp({
    data() {

        return {

            emailRandom: []

        }
    },
    methods: {
        generateEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((axiosResp) => {
                    this.emailRandom.push(result.data.response);
                    console.log(axiosResp)
                    console.log(axiosResp.data.response);
                });
        }
    },

    mounted() {

        for (let i = 0; i < 10; i++) {
            this.generateEmail();
        }

    }

}).mount("#app")
