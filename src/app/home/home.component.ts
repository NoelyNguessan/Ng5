import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import { DataService } from './../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('ambitions', [
      transition('* => *', [
        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  cpt: number;
  textBtn: string = " Ajouter un element ";
  textAmbition: string = " mon premier objectif ";
  ambitions = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.ambition.subscribe(res => this.ambitions = res);
    this.cpt = this.ambitions.length;
    this._data.changeDambition(this.ambitions);
  }

  Ajouter() {
    this.ambitions.push(this.textAmbition);
    this.textAmbition = '';
    this.cpt = this.ambitions.length;
    this._data.changeDambition(this.ambitions);

  }

  SupprimerElement(cpt) {
    this.ambitions.splice(cpt, 1);
    this.cpt = this.ambitions.length;
    this._data.changeDambition(this.ambitions);



  }
}
