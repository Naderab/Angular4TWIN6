import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css'],
})
export class FormCategoryComponent implements OnInit {
  a: number = this.c.getA();
  constructor(private c: CategoryService) {}
  ngOnInit(): void {
    console.log(this.c.a);
    this.a = this.c.getA();
  }
  category: Category = new Category();

  add() {
    this.category.available = true;
    this.c.addToList(this.category);
    console.log(this.category);
  }
}
