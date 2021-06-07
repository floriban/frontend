<template>
	<div class="row">
		<div class="col-lg-12">
            <div class="relative">
                <div class="card card-custom gutter-b">
                    <div class="card-header">
                        <div class="card-title">
                            <span class="card-icon">
                                <i class="flaticon2-shopping-cart text-primary"></i>
                            </span>
                            <h3 class="card-label text-primary">
                                Listado de Asociados
                            </h3>
                        </div>

                        <div class="card-toolbar">
                            <a href="#" class="btn btn-sm btn-primary font-weight-bold open-modal">
                                <i class="ki ki-plus"></i> &nbsp; Agregar
                            </a>
                        </div>
                    </div>
                    
                    <div class="card-body">
                        <FilterComponent :datos="datos.attributes" :placeholder="'asociados'" @accion="paginar" />

                        <TableComponent>
                            <template v-slot:thead>
                                <tr>
                                    <th>#</th>
                                    <th>Asociados</th>
                                    <th>Documento</th>
                                    <th>Dirección</th>
                                    <th>Teléfono</th>
                                    <th>Distrito</th>
                                    <th>Operaciones</th>
                                </tr>
                            </template>

                            <template v-slot:tbody>
                                <tr v-for="(asociado, index) in datos.elementos" :key="index">
                                    <td>{{ datos.attributes.from + index }}</td>
                                    <td>{{ asociado.nombre_completo }}</td>
                                    <td>{{ asociado.tipo_documento }} | {{ asociado.documento }}</td>
                                    <td>{{ asociado.direccion }}</td>
                                    <td>{{ asociado.telefono }}</td>
                                    <td>{{ asociado.distrito }}</td>
                                    <td>
                                        <div class="btn-group btn-group-sm">
                                            <button type="button" class="btn btn-primary"><i class="flaticon2-edit"></i></button>
                                            <button type="button" class="btn btn-danger"><i class="flaticon2-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </TableComponent>
                    </div>

                    <LoadingComponent :mostrar="espera" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/theme/js/scripts.bundle.js'
import LoadingComponent from '@/components/general/LoadingComponent'
import FilterComponent from '@/components/general/FilterComponent'
import TableComponent from '@/components/general/TableComponent'

export default {
    data() {
        return {
            espera: false,
            url: 'http://127.0.0.1:8000/api/asociados',
            datos: {
                elementos: [],
                attributes: {}
            }
        }
    },
    components: {
        LoadingComponent,
        FilterComponent,
        TableComponent
    },
    created () {
        this.mostrarElementos(this.url)
    },
    methods: {
        paginar(url){
            this.mostrarElementos(url)
        },
        mostrarElementos(url){
            this.espera = true
            const elements = async() => {
                try {
                    const res = await fetch(url)
                    const data = await res.json()
                    const dataGroup = data.datos
                    
                    this.datos.attributes = dataGroup
                    this.datos.elementos = dataGroup.data
                    this.espera = false
                } catch (error) {
                    console.log(error)
                }
            }

            elements()
        }
    },
}
</script>