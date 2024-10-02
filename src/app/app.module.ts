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
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './features/product/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'',redirectTo:'/home', pathMatch:'full'},
  { path: 'product/:id', component: ProductComponent },
  { path :'**' ,component:NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ListcategoriesComponent,
    FilterPipe,
    NotFoundComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
