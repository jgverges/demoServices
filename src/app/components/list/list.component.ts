import { Component, OnInit } from '@angular/core';
import { Lapiz } from 'src/app/model/lapiz';
import { LapizService } from 'src/app/services/lapiz.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lapices:Lapiz[] = [];

  constructor(private lapizService:LapizService) { }

  ngOnInit() {
    this.lapices = this.lapizService.getAll();
  }

}
