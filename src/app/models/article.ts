import { Category } from "./category";

export class Article {
  id: number = 0;
  title: string = '';
  contentMain: string = '';
  contentSummary: string = '';
  publishDate: Date = new Date();
  picture: string = '';
  viewCount: number = 0;
  commentCount: number = 0;
  category: Category = new Category();
}
