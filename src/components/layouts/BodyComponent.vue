<template>
    <div class="d-flex flex-column flex-root">
		<div class="d-flex flex-row flex-column-fluid page">
            <SidebarComponent />
            <ContentComponent />
        </div>
    </div>
</template>

<script>
import SidebarComponent from '@/components/layouts/SidebarComponent'
import ContentComponent from '@/components/layouts/ContentComponent'

export default {
    components: {
        SidebarComponent,
        ContentComponent
    },
}
</script>