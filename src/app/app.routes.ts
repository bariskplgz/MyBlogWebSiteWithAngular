import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ArticleComponent } from './pages/article/article.component';
import { CategoryArticlesComponent } from './pages/category-articles/category-articles.component';

export const routes: Routes = [
  {
    path:"",
    component: MainLayoutComponent,
    children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"sayfa/:page",
        component:HomeComponent
      },
      {
        path:"makale/:id",
        component:ArticleComponent
      },
      {
        path: "kategori/:name/:id",
        component: CategoryArticlesComponent
      },
      {
        path:"hakkimda",
        component:AboutMeComponent
      },
      {
        path:"iletisim",
        component:ContactComponent
      }
    ]
  },
  {
    path:"admin",
    component:AdminLayoutComponent
  }
];
