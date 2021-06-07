import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // INICIO
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Inicio/Inicio.vue')
  },

  //*********************** OPERACIONES DE VENTAS
  {
    path: '/emision-cat',
    name: 'EmisionCat',
    component: () => import('../views/EmisionCat/EmisionCat.vue')
  },
  {
    path: '/duplicar-cat',
    name: 'DuplicarCat',
    component: () => import('../views/DuplicarCat/DuplicarCat.vue')
  },
  {
    path: '/constancias',
    name: 'Constancias',
    component: () => import('../views/Constancias/Constancias.vue')
  },
  {
    path: '/control-cat',
    name: 'ControlCat',
    component: () => import('../views/ControlCat/ControlCat.vue')
  },
  {
    path: '/certificados',
    name: 'Certificados',
    component: () => import('../views/Certificados/Certificados.vue')
  },
  {
    path: '/anular-cat',
    name: 'AnularCat',
    component: () => import('../views/AnularCat/AnularCat.vue')
  },

  //*********************** REPORTE DE VENTAS
  {
    path: '/reporte-ventas',
    name: 'ReporteVentas',
    component: () => import('../views/ReporteVentas/ReporteVentas.vue')
  },
  {
    path: '/reporte-clase-vehicular',
    name: 'ReporteClaseVehicular',
    component: () => import('../views/ReporteClaseVehicular/ReporteClaseVehicular.vue')
  },
  {
    path: '/reporte-vencidos',
    name: 'ReporteVencidos',
    component: () => import('../views/ReporteVencidos/ReporteVencidos.vue')
  },
  {
    path: '/reporte-comparativo',
    name: 'ReporteComparativo',
    component: () => import('../views/ReporteComparativo/ReporteComparativo.vue')
  },
  {
    path: '/reporte-sbs',
    name: 'ReporteSbs',
    component: () => import('../views/ReporteSbs/ReporteSbs.vue')
  },
  {
    path: '/reporte-sunat',
    name: 'ReporteSunat',
    component: () => import('../views/ReporteSunat/ReporteSunat.vue')
  },
  {
    path: '/reporte-concesionario',
    name: 'ReporteConcesionario',
    component: () => import('../views/ReporteConcesionario/ReporteConcesionario.vue')
  },

  //*********************** MANTENIMIENTOS DE VENTAS
  {
    path: '/asociados',
    name: 'Asociados',
    component: () => import('../views/Asociados/Asociados.vue')
  },
  {
    path: '/clase-vehicular',
    name: 'ClaseVehicular',
    component: () => import('../views/ClaseVehicular/ClaseVehicular.vue')
  },
  {
    path: '/empresas',
    name: 'Empresas',
    component: () => import('../views/Empresas/Empresas.vue')
  },
  {
    path: '/marcas',
    name: 'Marcas',
    component: () => import('../views/Marcas/Marcas.vue')
  },
  {
    path: '/modalidades',
    name: 'Modalidades',
    component: () => import('../views/Modalidades/Modalidades.vue')
  },
  {
    path: '/modelos',
    name: 'Modelos',
    component: () => import('../views/Modelos/Modelos.vue')
  },
  {
    path: '/vehiculos',
    name: 'Vehiculos',
    component: () => import('../views/Vehiculos/Vehiculos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
