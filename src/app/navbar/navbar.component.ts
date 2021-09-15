import { Component, OnInit } from '@angular/core';
import { NavItem } from '../Interfaces/NavItem'
import { NavitemService } from '../navitem.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  NavItems : NavItem[] = [];

  constructor(private navItemService: NavitemService) {

  }

  ngOnInit(): void {
    this.navItemService.getNavItems().subscribe(navitem => (this.NavItems = navitem))
    console.log(this.NavItems)
  }

}
