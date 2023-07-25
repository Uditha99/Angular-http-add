import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../Service/post.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit{

  list : Array<any> = []
  constructor(private postService:PostService) {
  }
  ngOnInit() {
    this.postService.findAll().
    subscribe(response=>{
      console.log(response)
      this.list=response
    })
  }
}
