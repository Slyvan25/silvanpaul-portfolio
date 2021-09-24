import { Component, OnInit } from '@angular/core';
import { NavItem } from './Interfaces/NavItem';
import { NavitemService } from './navitem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Silvan Paul - App and web developer';
  navigationItems: NavItem[] = []
  constructor(
    private navItemService: NavitemService,
  ) {}

  ngOnInit(){
    this.navItemService.getNavItems().subscribe(navitem => {
      this.navigationItems = navitem;
    })
  }
}
