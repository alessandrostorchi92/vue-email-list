"use strict"

// Consegna: Attraverso l’apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Vue.createApp({
    data() {

        return {

            emailRandom: []

        }
    },
    methods: {
    },

    mounted() {

        for (let i = 0; i < 10; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(axiosResp => {   
                    this.emailRandom.push(axiosResp.data.response)
                })
        }      

    }

}).mount("#app")
