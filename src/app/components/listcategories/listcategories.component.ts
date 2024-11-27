import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Category } from '../../models/category';
import { CardComponent } from '../card/card.component';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css'],
})
export class ListcategoriesComponent implements AfterViewInit, OnInit {
  categories: Category[] = [];
  constructor(private c: CategoryService) {}
  ngOnInit(): void {
    this.categories = this.c.getCategories();
  }

  increment() {
    console.log('increment:');
    console.log(this.c.a);
    this.c.add(5);
  }
  @ViewChildren(CardComponent) children!: QueryList<CardComponent>;

  ngAfterViewInit(): void {
    console.log(this.children);
  }
  title: string = '';

  deleteParent(id: number) {
    this.categories = this.categories.filter((c) => c.id != id);
  }

  afficheDescription(id: number) {
    //foreach : ES
    this.categories.forEach((element) => {
      if (element.id == id) {
        alert(element.description);
      }
    });
    //filter : ES
    let category = this.categories.filter((element) => element.id == id)[0];
    alert(category.description);
  }

  affichage() {
    console.log('affichage child');
  }
}
