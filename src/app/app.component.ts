import {Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {EncryptService} from './services/encrypt.service';
import {DecryptService} from './services/decrypt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    '../assets/css/bootstrap.css',
    '../assets/css/styles.css',
    '../assets/css/fontawesome-all.css',
    '../assets/css/swiper.css',
    '../assets/css/magnific-popup.css'
  ]
})
export class AppComponent implements OnInit {
  title = '3DES - UCA';
  loading = false;
  initialText: string;
  encryptedText = '';
  decryptedText = '';

  constructor( private toastr: ToastrService,
               private encryptService: EncryptService,
               private decryptService: DecryptService ) {}

   ngOnInit(): void {
    this.initialText = '';
   }

   Encrypt() {
    this.encryptService.ENCRYPT({ text: this.initialText }).subscribe( res => {
      if ( res.success ) {
        this.toastr.success('Encriptado con 3DES');
        this.encryptedText = res.data;
      }
    });
   }

  Decrypt() {
    this.decryptService.DECRYPT({ text: this.encryptedText }).subscribe( res => {
      if ( res.success ) {
        this.toastr.success('3DES Desencriptado');
        this.decryptedText = res.data;
      }
    });
  }

}
