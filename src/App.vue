<template>
  <HeaderMobileComponent />
  <BodyComponent />
  <ScrollTopComponent />
</template>

<script>
import './assets/theme/plugins/global/plugins.bundle.css'
import './assets/theme/plugins/custom/prismjs/prismjs.bundle.css'
import './assets/theme/css/style.bundle.css'

import './assets/theme/css/themes/layout/header/base/light.css'
import './assets/theme/css/themes/layout/header/menu/light.css'
import './assets/theme/css/themes/layout/brand/dark.css'
import './assets/theme/css/themes/layout/aside/dark.css'

import './assets/theme/plugins/global/plugins.bundle.js'
import './assets/theme/plugins/custom/prismjs/prismjs.bundle.js'

import HeaderMobileComponent from '@/components/layouts/HeaderMobileComponent'
import BodyComponent from '@/components/layouts/BodyComponent'
import ScrollTopComponent from '@/components/layouts/ScrollTopComponent'

export default {
  components: {
    HeaderMobileComponent,
    BodyComponent,
    ScrollTopComponent,
  },  
}
</script>

<style lang="scss">

</style>
