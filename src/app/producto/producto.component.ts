import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EditarproductoComponent } from '../editarproducto/editarproducto.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'price','createrAt','updatedAt','actions'];
  dataSource:any=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  id = '';
  nombre = '';
  descripcion = '';
  precio ='';


  Nnombre = '';
  Ndescripcion = '';
  Nprecio ='';

  constructor(
    private _productSvc: ProductoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getProductos();

  }
  getID(id: string) {
    console.log('get',id);
    this._productSvc.getID(id).pipe(
      tap(product => {
        this.id = product.id;
        this.nombre = product.name;
        this.descripcion = product.description;
        this.precio = product.price;
        console.log('get',this.id);
      })
      ).subscribe()
  
  }

  getProductos() {
    this._productSvc.getProductos().pipe(
      tap(products => {
        this.dataSource = new MatTableDataSource(products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
      ).subscribe()
  }
  addProduct() {
    console.log('add');
    const product = {
      name: this.Nnombre,
      description: this.Ndescripcion,
      price: this.Nprecio
    }
    this._productSvc.addProduct(product).pipe(
      tap( () => this.getProductos() )
    ).subscribe()
  }

  onDelete(id: string) {
    console.log('delete',id);
    this._productSvc.deleteProduct(id).pipe(
      tap( () => this.getProductos() )
    ).subscribe()
  }
  updateProduct(id: string) {
    console.log('update',id);
    const product = {
      id: this.id,
      name: this.nombre,
      description: this.descripcion,
      price: this.precio
    }
    this._productSvc.updateProduct(id, product).pipe(
      tap( () => this.getProductos() )
    ).subscribe()
  }



  guardar() {
    // Aquí puedes hacer algo con los datos (por ejemplo, enviarlos al servidor)
  
  }

}
