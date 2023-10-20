import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto/producto.service';


import { tap } from 'rxjs';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css']
})
export class EditarproductoComponent implements OnInit {
  mostrarFormulario =true ;
  nombre = '';
  descripcion = '';
  precio ='';
  constructor(private _productSvc: ProductoService) { }

  ngOnInit() {
  }
  /*
  updateProduct(id: string) {
    console.log('update',id);
    const product = {
      name: this.nombre,
      description: this.descripcion,
      price: this.precio
    }
    this._productSvc.updateProduct(id, product).pipe(
      tap( () => ProductoComponent.getProductos() )
    ).subscribe()
  }
  */
  cerrarFormulario() {
    this.mostrarFormulario = false;
  }

  guardar() {
    // Aquí puedes hacer algo con los datos (por ejemplo, enviarlos al servidor)
    this.cerrarFormulario();
  }
}


