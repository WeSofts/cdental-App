import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popupinfo',
  templateUrl: './popupinfo.component.html',
  styleUrls: ['./popupinfo.component.scss'],
})
export class PopupinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  cerrarSesion() {
    console.log('close session');
  }
  about() {
    console.log('abour');
  }
}
