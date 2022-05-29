import { Component, Input , Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Location, registerLocaleData } from '@angular/common';
import { getDatabase, onValue, ref, remove, set, update } from 'firebase/database';
import { Database } from '@angular/fire/database';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    public actionSheetC: ActionSheetController
  ) { }

  items: any = []
   
  ngOnInit() {
    const db = getDatabase();
  }

 
}
