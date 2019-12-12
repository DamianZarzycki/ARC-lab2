import { Component, OnInit } from '@angular/core';
import { TvsService } from 'src/app/services/tvs.service';


@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.css']
})
export class TvListComponent implements OnInit {

  tvs?: any = [];
  constructor(private tvsService: TvsService) { }

  getAlltvsFromService() {
     this.tvsService.getAllTvs().subscribe((data) =>
     this.tvs = data);
  }

  ngOnInit() {
    this.getAlltvsFromService();
  }

}
