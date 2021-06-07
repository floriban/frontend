<template>
    <div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
        <HeaderComponent />
        <ContainerComponent />
    </div>
</template>

<script>
import HeaderComponent from '@/components/layouts/HeaderComponent'
import ContainerComponent from '@/components/layouts/ContainerComponent'

export default {
    components: {
        HeaderComponent,
        ContainerComponent
    },
}
</script>