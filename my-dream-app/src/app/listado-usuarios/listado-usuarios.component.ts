import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario/usuario';
import { UsuarioService } from '../models/usuario/usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }
  usuarios: Usuario[];
  ngOnInit(): void {
    this.usuarios=this.usuarioService.getUsuarios();
    
  }

}
