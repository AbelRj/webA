import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

constructor(
  private _http: HttpClient
) {
 }

getProductos():Observable<any> {
  return this._http.get('http://localhost:3000/products');
}
getID(id: string):Observable<any> {
  return this._http.get(`http://localhost:3000/products/${id}`);
}
addProduct(product: any):Observable<any> {
  return this._http.post('http://localhost:3000/products', product);
}
deleteProduct(id: string):Observable<any> {
  return this._http.delete(`http://localhost:3000/products/${id}`);
}
updateProduct(id: string, product: any):Observable<any> {
  return this._http.patch(`http://localhost:3000/products/${id}`, product);
}


}
