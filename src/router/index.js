import { createWebHistory, createRouter } from "vue-router";
import List from "@/views/List.vue";
import Create from "@/views/Create.vue";
import Edit from "@/views/Edit.vue";

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
