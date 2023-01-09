// console.log ('OK VUE', Vue);

const app = Vue.createApp({
    data() {
        return {
            text: 'Vue Hello'
        }
    }
});

app.mount('#root');