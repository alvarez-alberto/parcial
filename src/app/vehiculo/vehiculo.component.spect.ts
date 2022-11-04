/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { VehiculoComponent } from './vehiculo.component';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo';


describe('VehiculoListComponent', () => {
 let component: VehiculoComponent;
 let fixture: ComponentFixture<VehiculoComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ VehiculoComponent ],
     providers: [ VehiculoService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(VehiculoComponent);
   component = fixture.componentInstance;

   component.vehiculos = [
     new Vehiculo(faker.datatype.number(), faker.datatype.string(),faker.datatype.string(),
     faker.datatype.string(),faker.datatype.number(),faker.datatype.number(), faker.datatype.string(),faker.datatype.string())
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.vehiculos[0].marca)
 });

});
