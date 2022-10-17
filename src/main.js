import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store'
import tailwindcss from './assets/tailwindcss.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init();
createApp(App).use(store).use(Vuelidate).use(router).use(tailwindcss).use(VueSweetalert2).mount('#app')
