<template>
    <div class="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside">
        <div class="brand flex-column-auto" id="kt_brand">
            <router-link to="/" class="brand-logo">
                <img alt="Logo" src="../../assets/images/logo.png" class="logo-sidebar" />
            </router-link>

            <button class="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
                <span class="svg-icon svg-icon svg-icon-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <polygon points="0 0 24 0 24 24 0 24" />
                            <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fill-rule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)" />
                            <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)" />
                        </g>
                    </svg>
                </span>
            </button>
        </div>
        
        <div class="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
            <div id="kt_aside_menu" class="aside-menu my-4" data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500">
                <ul class="menu-nav">
                    <li class="menu-section">
                        <h4 class="menu-text">Menú Principal</h4>
                        <i class="menu-icon ki ki-bold-more-hor icon-md"></i>
                    </li>
                    <li class="menu-item menu-item-active" aria-haspopup="true">
                        <router-link to="/" class="menu-link">
                            <i class="menu-icon flaticon2-architecture-and-city"></i>
                            <span class="menu-text">Panel Principal</span>
                        </router-link>
                    </li>

                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="javascript:;" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-supermarket"></i>
                            <span class="menu-text">Operaciones de Ventas</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                            <i class="menu-arrow"></i>
                            <ul class="menu-subnav">
                                <li class="menu-item menu-item-parent" aria-haspopup="true">
                                    <span class="menu-link">
                                        <span class="menu-text">Operaciones de Ventas</span>
                                    </span>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/emision-cat" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Emisión CAT</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/duplicar-cat" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Duplicar CAT</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/constancias" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Constancias</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/control-cat" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Control de CAT</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/certificados" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Certificados</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/anular-cat" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Anular CAT</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="javascript:;" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-copy"></i>
                            <span class="menu-text">Rep. de Ventas</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                            <i class="menu-arrow"></i>
                            <ul class="menu-subnav">
                                <li class="menu-item menu-item-parent" aria-haspopup="true">
                                    <span class="menu-link">
                                        <span class="menu-text">Rep. de Ventas</span>
                                    </span>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/reporte-ventas" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Reportes de Ventas</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/reporte-clase-vehicular" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Reporte x Clase Vehicular</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/reporte-vencidos" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Reporte de Vencidos</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/reporte-comparativo" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Reporte Comparativo</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/reporte-sbs" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Reporte SBS</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/reporte-sunat" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Reporte SUNAT</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/reporte-concesionario" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Reporte Concesionarios</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="javascript:;" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-shopping-cart"></i>
                            <span class="menu-text">Mant. Ventas</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                            <i class="menu-arrow"></i>
                            <ul class="menu-subnav">
                                <li class="menu-item menu-item-parent" aria-haspopup="true">
                                    <span class="menu-link">
                                        <span class="menu-text">Mant. Ventas</span>
                                    </span>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/asociados" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Asociados</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/vehiculos" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Vehículos</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/modelos" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Modelos</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/marcas" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Marcas</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/empresas" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Empresas</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/modalidades" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Modalidad</span>
                                    </router-link>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <router-link to="/clase-vehicular" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Clase Vehicular</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="javascript:;" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-layers"></i>
                            <span class="menu-text">Expedientes</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                            <i class="menu-arrow"></i>
                            <ul class="menu-subnav">
                                <li class="menu-item menu-item-parent" aria-haspopup="true">
                                    <span class="menu-link">
                                        <span class="menu-text">Themes</span>
                                    </span>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/aside-light.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Light Aside</span>
                                    </a>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/header-dark.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Dark Header</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item" aria-haspopup="true">
                        <router-link to="/" class="menu-link">
                            <i class="menu-icon flaticon2-user"></i>
                            <span class="menu-text">Consultar Pacientes</span>
                        </router-link>
                    </li>
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="javascript:;" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-menu-2"></i>
                            <span class="menu-text">Mant. Siniestros</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                            <i class="menu-arrow"></i>
                            <ul class="menu-subnav">
                                <li class="menu-item menu-item-parent" aria-haspopup="true">
                                    <span class="menu-link">
                                        <span class="menu-text">Themes</span>
                                    </span>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/aside-light.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Light Aside</span>
                                    </a>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/header-dark.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Dark Header</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="javascript:;" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-list-3"></i>
                            <span class="menu-text">Rep. de Siniestros</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                            <i class="menu-arrow"></i>
                            <ul class="menu-subnav">
                                <li class="menu-item menu-item-parent" aria-haspopup="true">
                                    <span class="menu-link">
                                        <span class="menu-text">Themes</span>
                                    </span>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/aside-light.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Light Aside</span>
                                    </a>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/header-dark.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Dark Header</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="javascript:;" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-writing"></i>
                            <span class="menu-text">Proceso de Ocurrencia</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                            <i class="menu-arrow"></i>
                            <ul class="menu-subnav">
                                <li class="menu-item menu-item-parent" aria-haspopup="true">
                                    <span class="menu-link">
                                        <span class="menu-text">Themes</span>
                                    </span>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/aside-light.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Light Aside</span>
                                    </a>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/header-dark.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Dark Header</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="javascript:;" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-copy"></i>
                            <span class="menu-text">Rep. de Procuraduría</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                            <i class="menu-arrow"></i>
                            <ul class="menu-subnav">
                                <li class="menu-item menu-item-parent" aria-haspopup="true">
                                    <span class="menu-link">
                                        <span class="menu-text">Themes</span>
                                    </span>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/aside-light.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Light Aside</span>
                                    </a>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/header-dark.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Dark Header</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="javascript:;" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-box"></i>
                            <span class="menu-text">Mant. Administrativo</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                            <i class="menu-arrow"></i>
                            <ul class="menu-subnav">
                                <li class="menu-item menu-item-parent" aria-haspopup="true">
                                    <span class="menu-link">
                                        <span class="menu-text">Themes</span>
                                    </span>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/aside-light.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Light Aside</span>
                                    </a>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/header-dark.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Dark Header</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item" aria-haspopup="true">
                        <router-link to="/" class="menu-link">
                            <i class="menu-icon flaticon-upload"></i>
                            <span class="menu-text">Comp. Electrónicos</span>
                        </router-link>
                    </li>
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="javascript:;" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-copy"></i>
                            <span class="menu-text">Rep. Contabilidad</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                            <i class="menu-arrow"></i>
                            <ul class="menu-subnav">
                                <li class="menu-item menu-item-parent" aria-haspopup="true">
                                    <span class="menu-link">
                                        <span class="menu-text">Themes</span>
                                    </span>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/aside-light.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Light Aside</span>
                                    </a>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/header-dark.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Dark Header</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <a href="javascript:;" class="menu-link menu-toggle">
                            <i class="menu-icon flaticon2-gear"></i>
                            <span class="menu-text">Mant. General</span>
                            <i class="menu-arrow"></i>
                        </a>
                        <div class="menu-submenu">
                            <i class="menu-arrow"></i>
                            <ul class="menu-subnav">
                                <li class="menu-item menu-item-parent" aria-haspopup="true">
                                    <span class="menu-link">
                                        <span class="menu-text">Themes</span>
                                    </span>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/aside-light.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Light Aside</span>
                                    </a>
                                </li>
                                <li class="menu-item" aria-haspopup="true">
                                    <a href="layout/themes/header-dark.html" class="menu-link">
                                        <i class="menu-bullet menu-bullet-dot">
                                            <span></span>
                                        </i>
                                        <span class="menu-text">Dark Header</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .logo-sidebar{
        width: 100px; 
    }
</style>