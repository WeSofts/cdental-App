import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private loginService: LoginService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router
    ) { }

  logoBlue = '../../../assets/img/logo-blue.png';
  ngOnInit() {
  }

  async login(form: NgForm) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Iniciando sesión...',
      duration: 1000
    });
    this.loginService.loginClient(form.value)
      .subscribe(
        async data => {
        console.log(data);
        if (!data.auth) {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Información',
            subHeader: 'Contraseña o correo incorrectos',
            buttons: ['OK']
          });
          await alert.present();
        } else {
          localStorage.setItem('session-data', JSON.stringify(data.usuario));
          this.router.navigateByUrl('/');
        }
      }, err => {
        console.log(err);
      }).add(async () => {
        await loading.present();
      });
  }

}
