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


  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculos()
  }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe( vehiculos => {
      this.vehiculos = vehiculos;
    });
    this.getTotalVehiculos();
  }

  getTotalVehiculos(): Map<string, number>{

    let totales : Map <string, number> = new Map();

    this.vehiculos.forEach(vehiculo =>{

      let totalMarca = totales.get(vehiculo.marca)

      if(totalMarca  === undefined){
        totales.set(vehiculo.marca, 1)
      }else{
        totales.set(vehiculo.marca, totalMarca+1)
      }

    });

    return totales;
  }

}
