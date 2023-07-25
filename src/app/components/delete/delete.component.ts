import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../Service/post.service";
import {SnackBarService} from "../../Service/snack-bar.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{

  list : Array<any> = []
  constructor(private postService:PostService,private _snackBar:SnackBarService) {
  }
  ngOnInit() {
    this.postService.findAll().
    subscribe(response=>{
      console.log(response)
      this.list=response
    })
  }

  DeleteData(id:any){
      if(confirm("Are you sure delete" + id)){
        this.postService.delete(id).
        subscribe(response=>{
          if(response){

            this._snackBar.trigger('Deleted' , 'close')
          }

          for(let i=0;i<this.list.length;i++){
            if(this.list[i].id == id){
              this.list.splice(i,1)
              return
            }
          }
        })
      }
  }
}
