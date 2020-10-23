import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './models/usuario/usuario.service';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from './models/usuario/usuario/usuario.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,UsuarioComponent, ListadoUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
