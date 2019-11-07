import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProveedorComponent } from './crear-proveedor/crear-proveedor.component';


const routes: Routes = [
  {path:'', component: CrearProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
