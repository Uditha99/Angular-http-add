import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit{

  list : Array<any> = []
  constructor(private http:HttpClient) {
  }
  ngOnInit() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').
    subscribe(response=>{
      console.log(response)
      this.list=response
    })
  }
}
