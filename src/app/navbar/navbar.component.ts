import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { NavItem } from '../Interfaces/NavItem'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() NavItems?: NavItem[] = [];
  CurrentRoute : String = "";
  menuOpen : boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      activatedRoute.url.subscribe((url: UrlSegment[])=> (this.CurrentRoute = url[0].path))
      this.menuOpen = false;
    }

  ngOnInit(): void {}

  clickedRoute(currentItem: String): void {
    this.CurrentRoute = currentItem;
  }

  toggleMenu() : void {
    this.menuOpen = this.menuOpen ? false : true;
    console.log(this.menuOpen);
  }

}
