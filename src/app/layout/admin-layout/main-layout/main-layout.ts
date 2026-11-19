import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from "../header/header";
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { Sidebar } from '../sidebar/sidebar';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, Header, Sidebar, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  pageTitle = 'Dashboard';
 constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
 debugger;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        let route = this.activatedRoute;

        while (route.firstChild) {
          route = route.firstChild;
        }

        this.pageTitle =
       
          route.snapshot.data['title'] || 'abc';

      });
  }
  isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }
}
