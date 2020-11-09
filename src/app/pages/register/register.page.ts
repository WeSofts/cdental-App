import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { RecoveryService } from '../../services/recovery.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController,
    private recoveryService:RecoveryService,
  ) {
   }

  ngOnInit() {
  }

  async recovery(form: NgForm) {
    this.recoveryService.recuperarContraseña(form.value.correo).subscribe(data =>{ console.log(data) }, error =>{ console.log(error) });
    }





}