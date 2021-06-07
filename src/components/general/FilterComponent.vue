<template>
    <div class="row">
        <div class="col-lg-6">
            <form action="">
                <div class="form-group">
                    <div class="input-group">
                        <input type="search" class="form-control" :placeholder="`Buscar ${placeholder} ...`" autofocus>
                        <div class="input-group-append">
                            <router-link :to="datos.prev_page_url ?  datos.prev_page_url : ''" :class="verificarAnterior" @click.capture="accion(datos.prev_page_url)">
                                <i class="ki ki-arrow-back"></i>
                            </router-link>

                            <router-link :to="datos.next_page_url ?  datos.next_page_url : ''" :class="verificarSiguiente" @click.capture="accion(datos.next_page_url)">
                                <i class="ki ki-arrow-next"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>  
</template>

<script>
export default {
    props: {
        datos: {
            type: Object
        },
        placeholder: {
            type: String
        }
    },
    computed: {
        verificarAnterior() {
            return this.datos.prev_page_url ? 'btn btn-danger' : 'btn btn-danger disabled'
        },
        verificarSiguiente() {
            return this.datos.next_page_url ? 'btn btn-danger' : 'btn btn-danger disabled'
        }
    },
    methods: {
        accion(url) {
            this.$emit('accion', url)
        }
    },
}
</script>