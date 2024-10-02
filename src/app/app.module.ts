import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListcategoriesComponent } from './components/listcategories/listcategories.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductModule } from './features/product/product.module';
import { SearchPricePipe } from './pipes/search-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListcategoriesComponent,
    FilterPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
