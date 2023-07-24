import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  searchID:string = ''
  list : Array<any> = []
  constructor(private http:HttpClient) {
  }
  LoadData() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts?id='+this.searchID).
    subscribe(response=>{
      console.log(response)
      this.list=response
    })
  }
}
