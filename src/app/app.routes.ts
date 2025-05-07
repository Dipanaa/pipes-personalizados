import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "basicpipes",
    title: "Pagina basica de pipes",
    loadComponent: () => import("./pages/basic-page/basic-page.component")
  },
  {
    path: "numbers",
    title: "Pagina pipes de numeros",
    loadComponent: () => import("./pages/numbers-page/numbers-page.component")
  },
  {
    path: "custom",
    title: "Pagina custom de pipes",
    loadComponent: () => import("./pages/custom-page/custom-page.component")
  },
  {
    path: "uncommon",
    title: "Pagina uncommon de pipes",
    loadComponent: () => import("./pages/uncommon-page/uncommon-page.component")
  },
  {
    path:"**",
    redirectTo: "basicpipes"
  }


];
