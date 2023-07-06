import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { BarraComponent } from './components/barra/barra.component';
import { FormsModule }   from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    BarraComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    MatToolbarModule
  ],
  exports: [
    BarraComponent
  ]
})
export class MenuModule { }
