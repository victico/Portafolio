import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
 
})
export class BuscadorComponent{


parametro:string = undefined;
  constructor( private route:ActivatedRoute,
  			   public _ps:ProductosService ) { 

route.params.subscribe( parametros=>{
	
this.parametro = parametros['parametro'];
console.log(this.parametro);
_ps.buscar_productos( this.parametro )
});

  }

  

}
