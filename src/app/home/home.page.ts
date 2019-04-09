import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { ResultDonePage } from '../result-done/result-done.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ){}

  submitTapped() {
    console.log('Do Something here to register');

    this.navCtrl.navigateForward('/result-done');
  }
}
