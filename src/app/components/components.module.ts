import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageTitleComponent } from './page-title/page-title.component';
import { ArticlesComponent } from './articles/articles.component';
import { UrlformatPipe } from '../Pipes/urlformat.pipe';

@NgModule({
  declarations: [MenuCategoryComponent,PageTitleComponent,ArticlesComponent,UrlformatPipe],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports: [MenuCategoryComponent,PageTitleComponent,ArticlesComponent,UrlformatPipe]
})
export class ComponentsModule { }
