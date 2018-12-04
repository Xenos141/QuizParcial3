import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { EntrarPage } from '../entrar/entrar';
import { Storage } from '@ionic/storage';
import { text } from '@angular/core/src/render3/instructions';
import { ProductosPage } from '../productos/productos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  productos = ProductosPage
  entrar = EntrarPage
  usuario1 = "";
  contrasena1 = "";
  Usuarios = [{ usuario1: "", contrasena1: "" }];
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public storage: Storage) {

    this.storage.keys()
      .then(keys => {
        console.log(keys)
        if (keys.some(key => key == 'usuarios')) {
          this.storage.get('usuarios')
            .then(Usuarios => {
              this.Usuarios = JSON.parse(Usuarios);
            })
        }
      })
  }
  Nuevo() {
    this.navCtrl.push(this.entrar, { usuarios: this.Usuarios });
  }

  Entrar() {
    let index = this.Usuarios.findIndex(u => u.usuario1 == this.usuario1)
    let index2 = this.Usuarios.findIndex(c => c.contrasena1 == this.contrasena1)

    if (index > 0) {
      if (index == index2) {
        this.navCtrl.push(this.productos);
      }
      else {
        const alert = this.alertCtrl.create({
          title: 'Log in erroneo',
          subTitle: 'Intente de nuevo',
          buttons: ['OK']
        });
        alert.present();
      }
      this.usuario1 = "";
      this.contrasena1 = "";
    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Log in erroneo',
        subTitle: 'Intente de nuevo',
        buttons: ['OK']
      });
      alert.present();
    }
    this.usuario1 = "";
    this.contrasena1 = "";
  }
}


