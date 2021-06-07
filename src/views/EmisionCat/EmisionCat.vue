<template>
	<div class="row">
		<div class="col-lg-8">
			<div class="row">
				<div class="col-lg-12">
					<div class="card card-custom gutter-b">
						<div class="card-header">
							<div class="card-title">
								<span class="card-icon">
									<i class="flaticon2-bell-2 text-success"></i>
								</span>
								<h3 class="card-label text-success">
									Emision de CAT
								</h3>
							</div>
						</div>
						
						<div class="card-body">
							<div :class="mensajePlaca.clases" role="alert" v-if="mensajePlaca.show" v-html="mensajePlaca.message"></div>

							<div class="row">
								<div class="col-lg-3">
									<div class="form-group">
										<label for="">N° Certificado</label>
										<input type="text" class="form-control text-center" />
									</div>
								</div>

								<div class="col-lg-3">
									<div class="form-group">
										<label>Periodo</label>
										<input type="text" class="form-control text-center" value="2021" disabled/>
									</div>
								</div>

								<div class="col-lg-6"><div class="form-group">
										<label>Placa</label>
										<div class="input-group">
											<input type="text" class="form-control text-center" id="input-placa" v-model="placa" autofocus>
											<div class="input-group-append">
												<button type="button" class="btn btn-danger" data-toggle="tooltip" data-theme="dark" title="Buscar placa" data-placement="top" @click="buscarPlaca"><i class="fas fa-search"></i></button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-12">
					<div class="card card-custom gutter-b">
						<div class="card-header">
							<div class="card-title">
								<span class="card-icon">
									<i class="flaticon2-notepad text-primary"></i>
								</span>
								<h3 class="card-title text-primary">
									Datos del Asociado y del Vehículo
								</h3>
							</div>
						</div>
						
						<div class="card-body">
							<div class="row">
								<div class="col-lg-6">
									<div class="form-group">
										<label for="">Asociado</label>
										<div class="group-button-vertical">
											<input type="text" class="form-control text-center" readonly/>
											<button type="button" class="btn btn-primary btn-sm btn-block" disabled><i class="la la-sign-out-alt"></i>	Mostrar Asociado</button>
										</div>
									</div>
								</div>

								<div class="col-lg-6">
									<div class="form-group">
										<label>Vehículo</label>
										<div class="group-button-vertical">
											<input type="text" class="form-control text-center" readonly/>
											<button type="button" class="btn btn-primary btn-sm btn-block" disabled><i class="la la-sign-out-alt"></i>	Mostrar Vehículo</button>
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-lg-6">
									<div class="form-group">
										<label for="">Modalidad</label>
										<input type="text" class="form-control text-center" readonly/>
									</div>
								</div>

								<div class="col-lg-6">
									<div class="form-group">
										<label>Empresa</label>
										<input type="text" class="form-control text-center" readonly/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-6">
					<div class="card card-custom gutter-b">
						<div class="card-header">
							<div class="card-title">
								<span class="card-icon">
									<i class="flaticon2-warning text-danger"></i>
								</span>
								<h3 class="card-title text-danger">
									Anulación
								</h3>
							</div>
						</div>
						
						<div class="card-body">
							<div class="group-btn">
								<a href="#" class="btn btn-danger" data-toggle="popover" data-placement="top" title="Anulación completa" data-content="Anula tanto el CERTIFICADO como el COMPROBANTE de este vehículo">
									<i class="la la-times"></i> Certificado
								</a>

								<a href="#" class="btn btn-danger" data-toggle="popover" data-placement="top" title="Anulación del comprobante" data-content="Anula SÓLO EL COMPROBANTE de este vehículo y volverá a generar uno nuevo">
									<i class="la la-times"></i> Comprobante
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-lg-6">
					<div class="card card-custom gutter-b">
						<div class="card-header">
							<div class="card-title">
								<span class="card-icon">
									<i class="flaticon2-print text-info"></i>
								</span>
								<h3 class="card-title text-info">
									Reimpresión
								</h3>
							</div>
						</div>
						
						<div class="card-body">
							<div class="group-btn">
								<a href="#" class="btn btn-primary" data-toggle="popover" data-placement="top" title="Reimpresión del certificado" data-content="Para reimprimir el formato del certificado">
									<i class="la la-award"></i> Certificado
								</a>

								<a href="#" class="btn btn-success" data-toggle="popover" data-placement="top" title="Reimpresión del comprobante" data-content="Para reimprimir el comprobante de venta">
									<i class="la la-file-export"></i> Comprobante
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-lg-4">
			<div class="card card-custom gutter-b">
				<div class="card-header">
					<div class="card-title">
						<span class="card-icon">
							<i class="flaticon2-shopping-cart-1 text-danger"></i>
						</span>
						<h3 class="card-label text-danger">
							Detalle de venta
						</h3>
					</div>
				</div>
				
				<div class="card-body">
					<p class="display-2 text-center">S/ <span >0.00</span></p>
					<div class="separator separator-dashed separator-border-2"></div>
					<h3 class="display-5 text-center mt-5 mb-4">DETALLE VENTA</h3>

					<div class="row">
						<div class="col-lg-6">
							<div class="form-group text-center">
								<label for="">Fecha de registro</label>
								<input type="text" class="form-control text-center" value="21/01/2021" readonly/>
							</div>
						</div>

						<div class="col-lg-6">
							<div class="form-group text-center">
								<label>Hora de registro</label>
								<input type="text" class="form-control text-center" value="02:01 PM" readonly/>
							</div>
						</div>
					</div>

					<table class="table">
						<tbody>
							<tr class="table-primary">
								<th colspan="2" class="text-center">DATOS DEL CERTIFICADO</th>
							</tr>
							<tr>
								<th scope="row">Tipo de Moneda:</th>
								<td class="text-right">Soles (S/)</td>
							</tr>
							<tr>
								<th scope="row">Inicio de Vigencia:</th>
								<td class="text-right">21/01/2021</td>
							</tr>
							<tr>
								<th scope="row">Fin de Vigencia:</th>
								<td class="text-right">21/01/2022</td>
							</tr>
							<tr>
								<th scope="row">Vigencia:</th>
								<td class="text-right">1 año</td>
							</tr>
							<tr>
								<th scope="row">Valor del CAT:</th>
								<td class="text-right">S/ <span>0.00</span></td>
							</tr>
							<tr>
								<th scope="row">Aporte Extraordinario:</th>
								<td class="text-right">S/ <span>0.00</span></td>
							</tr>
							<tr>
								<th scope="row">Ámbito:</th>
								<td class="text-right">SAN MARTÍN</td>
							</tr>
						</tbody>
					</table>

					<button class="btn btn-lg btn-block btn-danger font-weight-bold font-size-h3" disabled><i class="flaticon2-shopping-cart-1"></i> REGISTRAR CAT</button>
				</div>
			</div>
		</div>

		<div class="col-lg-12">
			<div class="card card-custom gutter-b">
				<div class="card-header">
					<div class="card-title">
						<span class="card-icon">
							<i class="flaticon2-calendar-8 text-warning"></i>
						</span>
						<h3 class="card-label text-warning">
							Historial del Vehículo
						</h3>
					</div>
				</div>
				
				<div class="card-body">
					<table class="table table-border">
						<thead class="thead-light">
							<tr>
								<th>#</th>
								<th>Asociado</th>
								<th>Certificado</th>
								<th>Fecha Inicio</th>
								<th>Fecha Fin</th>
								<th>Clase Vehicular</th>
								<th>Modalidad</th>
								<th>Tipo</th>
								<th>Situación</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>IBAÑEZ FLORES, DEDDY ALEJANDRO</td>
								<td>123-2020</td>
								<td>21/01/2021</td>
								<td>21/01/2022</td>
								<td>MOTOCICLETA</td>
								<td>SERVICIO DE TRANSPORTE PRIVADO</td>
								<td>VENTA</td>
								<td>
									<span class="label label-sm label-success label-pill label-inline">VIGENTE</span>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>IBAÑEZ FLORES, DEDDY ALEJANDRO</td>
								<td>123-2020</td>
								<td>21/01/2021</td>
								<td>21/01/2022</td>
								<td>MOTOCICLETA</td>
								<td>SERVICIO DE TRANSPORTE PRIVADO</td>
								<td>VENTA</td>
								<td>
									<span class="label label-sm label-danger label-pill label-inline">SIN VIGENCIA</span>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td>IBAÑEZ FLORES, DEDDY ALEJANDRO</td>
								<td>123-2020</td>
								<td>21/01/2021</td>
								<td>21/01/2022</td>
								<td>MOTOCICLETA</td>
								<td>SERVICIO DE TRANSPORTE PRIVADO</td>
								<td>VENTA</td>
								<td>
									<span class="label label-sm label-danger label-pill label-inline">SIN VIGENCIA</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import '@/assets/theme/js/scripts.bundle.js'

export default {
	data() {
		return {
			placa: '',
			mensajePlaca: {
				show: false,
				clases: '',
				message: ''
			}
		}
	},
	computed: {
		mayuscula() {
			return this.placa.toUpperCase()
		}
	},
	methods: {
		buscarPlaca() {
			this.mensajePlaca = {
				show: false,
				message: '',
				clases: ''
			}

			const regPlaca = /^[0-9a-zA-Z]{2,5}\s?-\s?[0-9a-zA-Z]{2,5}$/g

			if(regPlaca.test(this.placa)){
				this.placa = this.mayuscula
			} else{
				this.mensajePlaca = {
					show: true,
					message: '<strong>¡ERROR DE INGRESO!</strong> Al parecer la placa ingresada no es correcta. Vuelva a intentarlo.',
					clases: 'alert bg-danger-o-50 text-danger'
				}
			}
		}
	},
}
</script>

<style lang="scss" scope>
	.group-button-vertical input{
		border-radius: .42rem .42rem 0 0;
	}

	.group-button-vertical button{
		border-radius: 0 0 .42rem .42rem;
	}

	.group-btn a{
		width: 50%;
		border-radius: .42rem 0 0 .42rem;
		
		&:last-child{
			border-radius: 0 .42rem .42rem 0;
		}
	}

	.group-btn i{
		display: block;
		padding: .5rem;
		font-size: 2rem;
	}
</style>
