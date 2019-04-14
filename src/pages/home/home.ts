import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntroPage } from '../intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  intro = IntroPage;
  constructor(public navCtrl: NavController) {

  }

}
