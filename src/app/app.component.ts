import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  title = 'WEB';
  encryptForm: FormGroup;
  loading = false;

  constructor( private formBuilder: FormBuilder,
               private toastr: ToastrService,
               private encryptService: EncryptService,
               private decryptService: DecryptService ) {}

   ngOnInit(): void {
    this.encryptForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
   }


}
