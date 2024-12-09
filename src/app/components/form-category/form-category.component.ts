import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css'],
})
export class FormCategoryComponent implements OnInit {
  a: number = this.c.getA();
  constructor(private c: CategoryService, private _consumer: ConsumerService,
    private r:Router
  ) {}
  ngOnInit(): void {
    console.log(this.c.a);
    this.a = this.c.getA();
  }
  category: Category = new Category();

  add() {
    this.category.available = true;
    this._consumer.add<Category>('category', this.category).subscribe({
      next: () => this.r.navigate(['/home']),
      error :(e) => console.log(e)
    })
    //this.c.addToList(this.category);
    //console.log(this.category);
  }
}
