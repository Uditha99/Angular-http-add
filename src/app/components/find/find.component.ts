import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../Service/post.service";

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  searchID:string = ''
  list : Array<any> = []
  constructor(private postService:PostService) {
  }
  LoadData() {
    this.postService.find(this.searchID).
    subscribe(response=>{
      console.log(response)
      this.list=response
    })
  }
}
