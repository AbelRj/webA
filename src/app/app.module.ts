import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { EditarproductoComponent } from './editarproducto/editarproducto.component';
import{MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [		
    AppComponent,
      ProductoComponent,
      EditarproductoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
     MatInputModule, MatSelectModule,
     MatDialogModule,
      BrowserAnimationsModule,
      FormsModule,
      MatTooltipModule
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
