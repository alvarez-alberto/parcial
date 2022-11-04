/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoListComponent } from './vehiculo-list.component';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';


describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ VehiculoListComponent ],
      providers: [ VehiculoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const book = new Vehiculo(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string()
      );
      component.vehiculos.push(book);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <table.table> elements', () => {
    expect(debug.queryAll(By.css('table.table'))).toHaveSize(1)
  });

  it('should have 1 <thead.table-dark> elements', () => {
    expect(debug.queryAll(By.css('thead.table-dark'))).toHaveSize(1)
  });

  it('should have 7 <th> elements', () => {
    expect(debug.queryAll(By.css('th'))).toHaveSize(7)
  });

  it('should have an dd element ', () => {
    const td = debug.query(By.css('td'));
    const contentTd: HTMLElement = td.nativeElement;
    expect(contentTd.textContent).toEqual(component.vehiculos[0].marca)
  });

});
