// router.js or router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import FhirComponent from '@/components/FhirComponent.vue';  // Adjust path as necessary

const routes = [
  { path: '/', component: FhirComponent },
  // You can define other routes here as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;