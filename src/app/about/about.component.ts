import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { DataService } from './../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  ambitions: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));

  }

  ngOnInit() {
    this._data.ambition.subscribe(res => this.ambitions = res);
  }

  caseDepart()
  {
    this.router.navigate(['']);
  }

}
