import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ad-navbar',
  templateUrl: './ad-navbar.component.html',
  styleUrls: ['./ad-navbar.component.css']
})
export class AdNavbarComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
