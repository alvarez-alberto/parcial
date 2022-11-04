import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];
  totalPorMarca: Map<string, number> = new Map();

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe( vehiculos => {
      this.vehiculos = vehiculos;
      this.getTotalVehiculos();
    });
  }

  getTotalVehiculos(): void{

    this.vehiculos.forEach(vehiculo =>{
      let totalMarca = this.totalPorMarca.get(vehiculo.marca)
      if(!totalMarca){
        this.totalPorMarca.set(vehiculo.marca, 1)
      }else{
        this.totalPorMarca.set(vehiculo.marca, totalMarca+1)
      }
    });
  }

}
