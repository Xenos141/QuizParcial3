import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the EntrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrar',
  templateUrl: 'entrar.html',
})
export class EntrarPage {
  Usuarios = [];
  usuario = "";
  contrasena = "";
  home = HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Usuarios = this.navParams.get('usuarios');
  }

  Agregar()
  {
    this.Usuarios.push({
      usuario1: this.usuario,
      contrasena1: this.contrasena
    });
    this.usuario = "";
    this.contrasena = "";
    this.navCtrl.pop()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrarPage');
  }

}
