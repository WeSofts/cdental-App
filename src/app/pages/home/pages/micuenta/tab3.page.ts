import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopupinfoComponent } from '../../../../components/popupinfo/popupinfo.component';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  clientData: ClientData;
  constructor(public popoverController: PopoverController) {
    this.clientData = JSON.parse(localStorage.getItem('session-data'));
  }

  async openPopUp(ev: any) {
    const popover = await this.popoverController.create({
      component: PopupinfoComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
