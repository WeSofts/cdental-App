import { Component, OnInit } from '@angular/core';
import { SplashPageModule } from './splash.module';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  SplashPage = true;
  constructor() { }

  ngOnInit() {
  }

}
