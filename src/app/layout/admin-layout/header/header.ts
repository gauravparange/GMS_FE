import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  router = inject(Router);
  @Output() menuToggle = new EventEmitter<void>();
  @Input() pageTitle: string = '';

  logout() {
    this.router.navigate(['/login']);
  }
}
