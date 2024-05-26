import { Component, Input} from '@angular/core';
import { Article } from '../../models/article';
import { Router, ActivatedRoute } from "@angular/router";
import { ArticleService } from '../../services/article.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [RouterModule,CommonModule,NgxPaginationModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {
  @Input() totalCount: number = 0;
  @Input() articles: Article[] = [];
  @Input() page: number = 1;
  @Input() loadingItem: number = 0;
  @Input() pageSize: number = 10;
  @Input() typeList: string = "";
  default_article: string = "../../../assets/yazilim.jpg";



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public articleService: ArticleService
  ) {}
  createRange() {
    var items: number[] = [];
    for (var i = 1; i <= this.loadingItem; i++) {
      items.push(i);
    }
    return items;
  }

  ngOnInit() {
    this.articleService.loading = true;
    this.articleService.getArticles(this.page, this.pageSize).subscribe(data => {
      this.articles = data.articles;
      this.totalCount = data.totalCount;
      this.articleService.loading = false;
    });
  }

  pageChanged(event : any) {
    this.articleService.loading = true;
    this.page = event;
    switch (this.typeList) {
      case "home":
        this.router.navigateByUrl(`/sayfa/${this.page}`);
        break;
      case "category":
        let categoryName = this.route.snapshot.paramMap.get("name");
        let categoryId = this.route.snapshot.paramMap.get("id");

        this.router.navigateByUrl(
          `/kategori/${categoryName}/${categoryId}/sayfa/${this.page}`
        );

        break;

      case "search":
        let searchText = this.route.snapshot.queryParamMap.get("s");
        this.router.navigateByUrl(`/arama/sayfa/${this.page}?s=${searchText}`);

        break;

      case "archive":
        let year = this.route.snapshot.paramMap.get("year");
        let month = this.route.snapshot.paramMap.get("month");

        this.router.navigateByUrl(`/arsiv/${year}/${month}/sayfa/${this.page}`);

        break;

      default:
        break;
    }
  }
}
