import { Component, OnDestroy } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ArticlesComponent } from '../../components/articles/articles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageTitleComponent,ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {

  ngOnDestroy(): void {
    if (this.ajax != null) this.ajax.unsubscribe();
  }

  page:number =1;
  articles:Article[] = [];
  totalCount:number = 0;
  pageSize :number = 5;
  loadingItem: number = 5;
  ajax:any;


  constructor(private articleService:ArticleService,private router:Router,private route:ActivatedRoute)
  {
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get("page")) {
        this.page = Number(params.get("page"));
      }

      if (this.totalCount > 0) {
        if (this.totalCount >= this.page * this.pageSize) {
          this.loadingItem = 5;
        } else {
          this.loadingItem = this.totalCount - (this.page - 1) * this.pageSize;
        }
      }

      this.articles = [];
      this.totalCount = 0;

      this.ajax = this.articleService
        .getArticles(this.page, this.pageSize)
        .subscribe(data => {
          this.articles = data.articles;
          this.totalCount = data.totalCount;
        });
    });
  }




}
