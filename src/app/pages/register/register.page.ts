import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController,
  ) {
   }

  ngOnInit() {
  }

  async login(form: NgForm) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Iniciando sesión...',
      duration: 1000
    });

}
}