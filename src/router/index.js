import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import ReservationView from "../views/ReservationView.vue";
import MaisonView from "../views/MaisonView.vue";
import TerrainView from "../views/TerrainView.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: AccueilView,
  },
  {
    path: "/Reservation",
    name: "Reservation",
    component: ReservationView,
  },
  {
    path: "/Maison",
    name: "Maison",
    component: MaisonView,
  },
  {
    path: "/Terrain",
    name: "Terrain",
    component: TerrainView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
