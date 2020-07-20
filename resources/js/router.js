import Vue from "vue";
import VueRouter from "vue-router";
import IndexPage from "./Page/IndexPage";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: IndexPage
        }
    ]
});
