import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule,Router,NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Eğer kullanıyorsanız

enum MainPage
{
  home=1,about_me=2,contact=3
}

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css'
})

export class MainNavComponent {
  pageActive:MainPage = MainPage.home;
  constructor(private router:Router) {
    this.router.events.subscribe(x=> {

      if(x instanceof NavigationEnd)
      {
        console.log(x.url)
        if(x.url.indexOf("anasayfa")>0)
        {
          console.log("anasayfa")
          this.pageActive = MainPage.home;
        }
        else if(x.url.indexOf("hakkimda")>0)
        {
          console.log("hakkimda")
          this.pageActive = MainPage.about_me;
        }
        else if(x.url.indexOf("iletisim")>0)
        {
          console.log("iletisim")
          this.pageActive = MainPage.contact;
        }else
        {
          this.pageActive = MainPage.home;
        }
      }

    })
  }

}
