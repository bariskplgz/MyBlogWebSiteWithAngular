import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainNavComponent } from '../../nav/main-nav/main-nav.component';
import {MenuCategoryComponent } from '../../components/menu-category/menu-category.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,MainNavComponent,MenuCategoryComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
