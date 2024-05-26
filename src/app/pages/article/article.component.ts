import { Component,ViewChild } from '@angular/core';
import { Article } from '../../models/article';
import { Category } from '../../models/category';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  article: Article = new Article;
  category: Category = new Category;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.articleService.loading = true;

      let id = Number(this.route.snapshot.paramMap.get('id'));

      this.articleService.getArticle(id).subscribe((data: any) => {
        this.article = data.data;
        this.category = data.data.category;
      });
    });
  }


}
