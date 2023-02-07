import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import SingleProject from "./pages/SingleProject.vue";
import ContactUs from "./pages/ContactUs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/",
      name: "contact-us",
      component: ContactUs,
    },
    {
      path: "/blog/:slug",
      name: "single-project",
      component: SingleProject,
    },
  ],
});

export default router;
