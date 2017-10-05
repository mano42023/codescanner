import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({

 selector: 'page-home',
  providers: [BarcodeScanner],
 templateUrl: 'home.html'
})

export class HomePage {
	public barcode:string;
 constructor(public navCtrl: NavController , private barcodeScanner: BarcodeScanner ) {
   }
   

 scan(){
	this.barcodeScanner.scan().then((barcodeData) => {
		this.barcode= barcodeData.text;  
	}, (err) => {
		this.barcode=err;
	});
 }
}
