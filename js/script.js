// console.log ('OK VUE', Vue);

const app = Vue.createApp({
    data() {
        return {
            text: 'Vue Hello',
            image: 'https://unsplash.it/600/300?image=173'
        }
    }
});

app.mount('#root');