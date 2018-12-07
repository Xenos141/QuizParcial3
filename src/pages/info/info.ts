import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosPage } from '../productos/productos';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
producto = '';
carrito = [];
Usuarios = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
   this.producto = this.navParams.get('producto');
   this.carrito = this.navParams.get('carrito');
   this.Usuarios = this.navParams.get('Usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  acarrito()
  {
    this.carrito.push(this.producto);
    this.storage.set('Usuarios',JSON.stringify(this.Usuarios));
    this.navCtrl.pop();
  }
}
