import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username = '';

  constructor(private routerNavigate: Router) {
    console.log('app-menu constructor called!');
  }

  ngOnInit(): void {
    const session = sessionStorage.getItem('user');
    if (session == null) {
      this.routerNavigate.navigate(['home']);
    } else {
      this.username = atob(atob(session));
    }
  }

}
