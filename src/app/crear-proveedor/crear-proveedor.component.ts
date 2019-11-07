import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {

  formPro: FormGroup;

  constructor(private ff: FormBuilder) { }

  ngOnInit() {
    this.formPro = this.ff.group({
      nombre: '',
      cif: '',
      localidad: ''
    })
  }

  guardarPro() {
    let proveedor = {
      nombre: this.formPro.get('nombre').value,
      cif: this.formPro.get('cif').value,
      localidad: this.formPro.get('localidad').value
    }
    localStorage.setItem('proveedor', JSON.stringify(proveedor));
  }

}
