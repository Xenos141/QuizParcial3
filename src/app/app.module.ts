import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntrarPage } from '../pages/entrar/entrar';
import { IonicStorageModule } from '@ionic/storage';
import { ProductosPage } from '../pages/productos/productos';
import { InfoPage } from '../pages/info/info';
import { CarritoPage } from '../pages/carrito/carrito';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EntrarPage,
    ProductosPage,
    InfoPage,
    CarritoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntrarPage,
    ProductosPage,
    InfoPage,
    CarritoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
