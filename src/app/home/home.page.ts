import { ToastController } from '@ionic/angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qrData = 'https://google.com/';
  scannedCode:String =null;
  elementType: 'url' = 'url';


  constructor(private barcodeScanner: BarcodeScanner,private base64ToGallery:Base64ToGallery,private toastCtrl: ToastController,public alertController: AlertController) {

  }

    scanCode(){
     this.barcodeScanner.scan().then(
     barcodeData =>{
   this.scannedCode= barcodeData.text;
      
      }

    )

  }
 
 


}
