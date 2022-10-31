import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router
  ) { }
  public isLoggedIn: boolean = true;

  ngOnInit(): void {
  }

  onClick(path: string) {
    this.router.navigate([path]);
  }
}
