import {createRouter} from "vue-router"
import {createWebHistory} from "vue-router"

import HomeFeed from "../views/HomeFeed.vue"
import MeubleDetails from "../views/MeubleDetails.vue"
import RegistrationForm from "../views/RegistrationForm.vue"

const routes = [
    {
        path: '/',
        name: "Home",
        component: HomeFeed
    },
    {
        path: '/meuble/:id',
        name: "Meuble",
        component: MeubleDetails
    },
    {
        path: '/registrationform',
        name: "Registration Form",
        component: RegistrationForm
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
}) 

export default router