import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { NavItem } from '../Interfaces/NavItem'
import { NavitemService } from '../navitem.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  NavItems : NavItem[] = [];
  CurrentRoute : String = "";

  constructor(
    private navItemService: NavitemService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      activatedRoute.url.subscribe((url: UrlSegment[])=> (this.CurrentRoute = url[0].path))
    }

  ngOnInit(): void {
    this.navItemService.getNavItems().subscribe(navitem => {
      this.NavItems = navitem
    })
  }

  clickedRoute(currentItem: String): void {
    console.log(currentItem);
    this.CurrentRoute = currentItem;
  }

}
