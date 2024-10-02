import './bootstrap';
import { createApp } from 'vue';

import Index from './index.vue';
const app = createApp({
    components : {
        Index
    }
});

app.mount('#app');
