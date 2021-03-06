import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pid = '';

  constructor(private route: ActivatedRoute, private routerNavigate: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pid = params.get('id');
    });
  }

}
