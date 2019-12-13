import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = `https://lab2-dot-arc-pjatk.appspot.com/lab2`;
const postUrl = `http://127.0.0.1:8080/lab2vol2`

@Injectable({
  providedIn: 'root'
})
export class TvsService {

  constructor(public http: HttpClient) { }

  getAllTvs(){
    return this.http.get(url);
  }


  
  addTV(
    brand,
    contrast,
    format,
    resolution,
    type,
    
  ) {
    return this.http.post(postUrl + `?brand=${brand}&contrast=${contrast}&format=${format}&resolution=${resolution}&type=${type}`, {
      'Content-Type': 'application/json'
    }).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
    {
    }
  }



}
