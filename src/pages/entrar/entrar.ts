import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

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
  mail = '';
  telefono = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public alertCtrl: AlertController) {
    this.Usuarios = this.navParams.get('usuarios');
  }

  Agregar() {
    if (this.mail.length > 0) {
      if (this.telefono.length > 0) {
        if(this.usuario.length > 0){
          if(this.contrasena.length > 0){
            this.Usuarios.push({
              usuario1: this.usuario,
              contrasena1: this.contrasena,
              carrito1: []
            });
            this.usuario = "";
            this.contrasena = "";
            this.navCtrl.pop()
          }
          else {
            const alert = this.alertCtrl.create({
              title: 'No puedes registrarse',
              subTitle: 'Agregue Contraseña',
              buttons: ['OK']
            });
            alert.present();
          }
        }
        else {
          const alert = this.alertCtrl.create({
            title: 'No puedes registrarse',
            subTitle: 'Agregue E-mail',
            buttons: ['OK']
          });
          alert.present();
        }
      }
      else {
        const alert = this.alertCtrl.create({
          title: 'No puedes registrarse',
          subTitle: 'Agregue Telefono',
          buttons: ['OK']
        });
        alert.present();
      }
    } else {
      const alert = this.alertCtrl.create({
        title: 'No puedes registrarse',
        subTitle: 'Agregue Usuario',
        buttons: ['OK']
      });
      alert.present();
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrarPage');
  }

}
