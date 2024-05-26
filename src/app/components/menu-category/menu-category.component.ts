import { Component,OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service"
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UrlformatPipe } from '../../Pipes/urlformat.pipe';

@Component({
  selector: 'app-menu-category',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './menu-category.component.html',
  styleUrl: './menu-category.component.css',
  providers: [UrlformatPipe]
})
export class MenuCategoryComponent  implements OnInit{
  categories:Category[] = [];
  constructor(private categoryService:CategoryService){}

  ngOnInit(){
    this.categoryService.getCategories().subscribe((data: any)=>{
      this.categories = data.data;
    })
  }
}
