import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

  // ac: ActivatedRoute = new ActivatedRoute() // instantiation avec le constructeur
 /* c1(c2, c3);
  new c2(c4);
new c3();
new c1();*/
  
  id!: number;
  
  //Injection des dépendences : Design pattern
  constructor(private activated: ActivatedRoute) {
    //Path Param
    //Méthode 1
    this.activated.params.subscribe(param => this.id = param['id'])
    
    //Méthode 2
    this.activated.paramMap.subscribe(param => console.log(param))
    
    //Méthode 3
    console.log(this.activated.snapshot.params)

    //Query Param
    this.activated.queryParams.subscribe((param) => console.log(param['name']));

    this.listProducts = this.listProducts.filter((p) =>
      p.categoryId == this.id
    )

  }

  likeParent(id: number) {
    this.listProducts.find(p => p.id == id)!.nb_likes++;
  }

  price: number = 0;
  listProducts: Product[] = [
    {
      id: 1,
      name: 'Refrigérateur LG Inox',
      image: 'assets/images/product1.jpg',
      categoryId: 1,
      description: '',
      price: 2800,
      brand: 'LG',
      promotion: 0,
      nb_likes: 0,
    },
    {
      id: 2,
      name: 'Refrigérateur Samsung Blanc',
      image: 'assets/images/product3.jpeg',
      categoryId: 1,
      description: '',
      price: 2400,
      brand: 'Samsung',
      promotion: 0,
      nb_likes: 0,
    },
    {
      id: 3,
      name: 'Lave vaisselle Beko',
      image: 'assets/images/product4.jpeg',
      categoryId: 1,
      description: '',
      price: 1875,
      brand: 'BEKO',
      promotion: 0,
      nb_likes: 0,
    },
    {
      id: 4,
      name: 'Oppo Smart Phone',
      image: 'assets/images/product5.jpeg',
      categoryId: 4,
      description: '',
      price: 1200,
      brand: 'OPPO',
      promotion: 0,
      nb_likes: 0,
    },
    {
      id: 5,
      name: 'Hachoir',
      image: 'assets/images/product6.jpeg',
      categoryId: 2,
      description: '',
      price: 120,
      brand: 'Moulinex',
      promotion: 0,
      nb_likes: 0,
    },
    {
      id: 6,
      name: "TV 50'' LG",
      image: 'assets/images/product7.jpeg',
      categoryId: 5,
      description: '',
      price: 1800,
      brand: 'LG',
      promotion: 0,
      nb_likes: 0,
    },
  ];
  incrementLikes(element:Product) {
    element.nb_likes++;
  }
}
