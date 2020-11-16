import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email = '';
  password = '';

  // i = 0;

  constructor(private router: Router) {
    console.log('constructor Call!');
  }

  ngOnInit(): void {
    console.log('ngOnInit Call!');
    /*
    setInterval(() => {
      this.i++;
      this.email = '' + this.i;
    }, 1000);*/
  }

  // tslint:disable-next-line:typedef
  fncUserLogin() {
    // console.log('fncUserLogin Call!' + this.email + ' ' + this.password);
    if (this.email === '' || this.password === '') {
      alert('Mail or Password is empty!');
    } else {
      if (this.email === 'ali@ali.com' && this.password === '12345') {
        console.log('Login Success!');
        this.router.navigate(['/dashboard', 103]);
      }
    }
  }
}
