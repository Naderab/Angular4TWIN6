import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { SearchPricePipe } from 'src/app/pipes/search-price.pipe';


@NgModule({
  declarations: [ProductComponent, SearchPricePipe],
  imports: [CommonModule, ProductRoutingModule, FormsModule],
  exports: [ProductComponent],
})
export class ProductModule {}
