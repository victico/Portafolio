import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {


productos:any[] = [] ;
productos_filtrados:any[] =[];
cargando:boolean = true;
  constructor( private http:Http ) {


  this.cargar_productos();
 }
 public buscar_productos( parametro:string ){


if( this.productos.length === 0 ){
	
	this.cargar_productos().then( ()=>{
this.filtrar_productos(parametro);

	});
}else{
	
this.filtrar_productos(parametro);
}


}

private filtrar_productos( parametro:string ){
	
	this.productos_filtrados = [];
	parametro = parametro.toLowerCase();
	this.productos.forEach(prod =>{
	
	if( prod.categoria.indexOf( parametro )>=0 || prod.titulo.toLowerCase().indexOf( parametro )>=0 ){
	this.productos_filtrados.push ( prod );

	}



})
}

public cargar_producto( cod:string ){


 return	this.http.get(`https://ggizi-d4ff9.firebaseio.com/productos/${ cod }.json`);




}

public cargar_productos(){
	
this.cargando = true;
 let promesa = new Promise( ( resolve, reject )=>{


this.http.get( 'https://ggizi-d4ff9.firebaseio.com/producto_idx.json' )
	.subscribe(res =>{ 


	
	this.cargando = false;
	this.productos = res.json();
	resolve();
	});
 
 } );
	return promesa;


}


}
