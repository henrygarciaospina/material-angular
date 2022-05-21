import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'jperez', nombre: 'Juan', apellido: 'Pérez', sexo: 'Másculino'},
    {usuario: 'jvaldez', nombre: 'Juan', apellido: 'Valdez', sexo: 'Másculino'},
    {usuario: 'ajaramillo', nombre: 'Ana', apellido: 'Jaramillo', sexo: 'Femeninmo'},
    {usuario: 'mangel', nombre: 'María', apellido: 'Angel', sexo: 'Femeninmo'},
    {usuario: 'mrosa', nombre: 'María', apellido: 'Rosa', sexo: 'Femeninmo'},
    {usuario: 'jpedro', nombre: 'José', apellido: 'Parra', sexo: 'Másculino'},
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index,1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }

}
