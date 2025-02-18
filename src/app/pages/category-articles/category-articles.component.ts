import { Component, OnInit } from "@angular/core";
import { Article } from "../../models/article";
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "../../services/article.service";
import { ArticlesComponent } from "../../components/articles/articles.component";

@Component({
  selector: 'app-category-articles',
  standalone: true,
  imports: [ArticlesComponent],
  templateUrl: './category-articles.component.html',
  styleUrl: './category-articles.component.css'
})
export class CategoryArticlesComponent implements OnInit {
  page: number = 1;
  articles: Article[] = [];
  totalCount: number = 0;
  pageSize: number = 5;
  loadingItem: number = 5;
  ajax:any;
  categoryId: number = 1;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (this.ajax != null) this.ajax.unsubscribe();

      this.articleService.loading = true;
      this.articles = [];
      this.totalCount = 0;
      if (params.get("id")) {
        this.categoryId = Number(params.get("id"));
      }
      if (params.get("page")) {
        this.page = Number(params.get("page"));
      }

      this.ajax = this.articleService
        .getArticlesWithCategory(this.categoryId, this.page, this.pageSize)
        .subscribe(data => {
          this.articles = data.articles;
          this.totalCount = data.totalCount;
        });
    });
  }
}
