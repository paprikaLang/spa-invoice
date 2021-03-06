import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter ({
    mode: 'history',
    routes: [
        {path:'/',component:require('../views/invoices/index.vue')},
        {path:'/invoices',component:require('../views/invoices/index.vue')},
        {path:'/invoices/create',component: require('../views/invoices/form.vue')},
        {path:'/invoices/:id',component:require('../views/invoices/show.vue')},
        {path:'/invoices/:id/edit',component:require('../views/invoices/form.vue'),meta:{mode:'edit'}},

    ]
})

export default router

