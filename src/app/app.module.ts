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
import { SearchPricePipe } from './pipes/search-price.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './features/product/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductModule } from './features/product/product.module';
import { ProfileModule } from './features/profile/profile.module';
import { AproposModule } from './features/apropos/apropos.module';
import { ContactModule } from './features/contact/contact.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'products', loadChildren:
      () => import('./features/product/product.module')
      .then(m => m.ProductModule)
  },
  {
    path: 'contact', loadChildren:
      () => import('./features/contact/contact.module')
    .then(m=>m.ContactModule)
  },
  {
    path: 'apropos', loadChildren:
      () => import('./features/apropos/apropos.module')
    .then(m=>m.AproposModule)
  },
  {
    path: 'profile', loadChildren:
      () => import('./features/profile/profile.module')
    .then(m=>m.ProfileModule)
  },
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
