import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
  info = InfoPage;
  carritop = CarritoPage;
  productos = [
    {
      nproducto: "Nintendo Switch",
      vendedor: "Nintendo",
      fecha: "4/10",
      disponibles: "420", 
      precio: "$299.00",
      imagenp: "../assets/imgs/Nintendo Switch.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "Xbox One S – Minecrft Bundle",
      vendedor: "Microsoft",
      fecha: "15/11",
      disponibles: "25",
      precio: "$221.87",
      imagenp: "../assets/imgs/Xbox One S – Minecrft Bundle.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "Red Dead Redemption 2 – PlayStation 4",
      vendedor: "Rockstrar Games",
      fecha: "13/11",
      disponibles: "434",
      precio: "$59.88",
      imagenp: "../assets/imgs/Red Dead Redemption 2 – PlayStation 4.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "Marvel’s Spider-Man – PlayStation 4",
      vendedor: "Sony",
      fecha: "14/10",
      disponibles: "80",
      precio: "$46.99",
      imagenp: "../assets/imgs/Marvel’s Spider-Man – PlayStation 4.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "DualShock 4 Wireless Controller for PlayStation 4",
      vendedor: "Sony",
      fecha: "21/8",
      disponibles: "16",
      precio: "$46.96",
      imagenp: "../assets/imgs/DualShock 4 Wireless Controller for PlayStation 4.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "Razer Holiday Gaming Bundle",
      vendedor: "Razer",
      fecha: "1/12",
      disponibles: "7",
      precio: "$209.95",
      imagenp: "../assets/imgs/Razer Holiday Gaming Bundle.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "Thermaltake Versa C22 Mid Tower Computer Chasis",
      vendedor: "Thermaltake",
      fecha: "6/4",
      disponibles: "3",
      precio: "$69.08",
      imagenp: "../assets/imgs/Thermaltake Versa C22 Mid Tower Computer Chasis.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "Microsoft Xbox Wireless Controller + Wireless Adapter for Windows",
      vendedor: "Microsoft",
      fecha: "5/7",
      disponibles: "35",
      precio: "$56.00",
      imagenp: "../assets/imgs/Microsoft Xbox Wireless Controller + Wireless Adapter for Windows.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "Fallout 76 - PC",
      vendedor: "Bethesda",
      fecha: "14/11",
      disponibles: "76",
      precio: "$59.99",
      imagenp: "../assets/imgs/Fallout.png",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "Logitech Gamepad F310",
      vendedor: "Logitech",
      fecha: "5/6",
      disponibles: "73",
      precio: "$10.97",
      imagenp: "../assets/imgs/Logitech Gamepad F310.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "CORSAIR Void PRO Headphones for PC",
      vendedor: "Corsair",
      fecha: "7/8",
      disponibles: "43",
      precio: "$99.99",
      imagenp: "../assets/imgs/CORSAIR Void PRO Headphones for PC.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "Turtle Beach Ear Force Recon 50 Gaming Headset",
      vendedor: "Turtle Beach",
      fecha: "8/7",
      disponibles: "15",
      precio: "$37.95",
      imagenp: "../assets/imgs/Turtle Beach Ear Force Recon 50 Gaming Headset.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "The Legend of Zelda: Breath of the Wild – Nintendo Switch",
      vendedor: "Nintendo",
      fecha: "3/3",
      disponibles: "41",
      precio: "$48.01",
      imagenp: "../assets/imgs/Breath of the Wild – Nintendo Switch.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "HAVIT Rainbow Backlit Wired Gaming Keyboard Mouse Combo",
      vendedor: "Havit",
      fecha: "5/8",
      disponibles: "32",
      precio: "$30.39",
      imagenp: "../assets/imgs/HAVIT Rainbow Backlit Wired Gaming Keyboard Mouse Combo.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "Mobile Game Controller for IOS and Android",
      vendedor: "Novatronek",
      fecha: "6/9",
      disponibles: "69",
      precio: "$12.94",
      imagenp: "../assets/imgs/Mobile Game Controller for IOS and Android.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "COLOR-V Gaming Headset for Ps4, Pc, Xbox one…",
      vendedor: "COLOR--V",
      fecha: "30/6",
      disponibles: "15",
      precio: "$28.99",
      imagenp: "../assets/imgs/COLOR-V Gaming Headset for Ps4, Pc, Xbox one.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "HyperX Cloud II Gaming Headset – 7.1 Surround Sound",
      vendedor: "HyperX",
      fecha: "7/12",
      disponibles: "26",
      precio: "$91.99",
      imagenp: "../assets/imgs/HyperX.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "ONIKUMA Stereo Gaming Headset, enhanced 7.1 Surround Sound",
      vendedor: "ONIKUMA",
      fecha: "25/6",
      disponibles: "7",
      precio: "$24.99",
      imagenp: "../assets/imgs/ONIKUMA Stereo Gaming Headset, enhanced 7.1 Surround Sound.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "Sades Wired 3.5mm Stereo Universal Gaming Headset with Microphone",
      vendedor: "SADES",
      fecha: "7/12",
      disponibles: "43",
      precio: "$20.89",
      imagenp: "../assets/imgs/Sades Wired 3.5mm Stereo Universal Gaming Headset with Microphone.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "ASUS ROG Spartha RGB Wireless/Wired Laser Gaming Mouse",
      vendedor: "Asus",
      fecha: "13/6",
      disponibles: "13",
      precio: "$149.00",
      imagenp: "../assets/imgs/ASUS.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    },
    {
      nproducto: "ROG Phone Gaming Smartphone",
      vendedor: "ASUS",
      fecha: "4/3",
      disponibles: "43",
      precio: "$899.99",
      imagenp: "../assets/imgs/ROG Phone Gaming Smartphone.jpg",
      resenas: [
        {nombre: "Mr Bean",
        avatar: "../assets/Avatar.jpg",
        texto: "Anuma, que cool producto... 10/10",
        fechar: "4/20"
      }],
    }
  ];

  carrito = [];
  Usuario = {};
  Usuarios = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carrito = this.navParams.get('carritoU');
    this.Usuario = this.navParams.get('Usuario');
    this.Usuarios = this.navParams.get('Usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }
  clickproductos(producto) {
    this.navCtrl.push(this.info, {producto: producto, carrito: this.carrito, Usuarios:this.Usuarios});
  }
  clickAgregar()
  {
    this.navCtrl.push(this.carritop, {carrito: this.carrito});
  }
}
