import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../Service/post.service";
import {SnackBarService} from "../../Service/snack-bar.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  searchID:string = ''

  constructor(private postServise:PostService,private _snackBar: SnackBarService) {
  }
  LoadData() {
    this.postServise.find(this.searchID).
    subscribe(response=>{
      this.form.patchValue({
        id: response[0].id,
        userId: response[0].userId,
        tittle: response[0].title,
        body: response[0].body
        }
      )
    })
  }




  form = new FormGroup({
    id:new FormControl('',Validators.required),
    userId:new FormControl('',Validators.required),
    body:new FormControl('',Validators.required),
    tittle:new FormControl('',Validators.required),

  })
  updateData(){
    this.postServise.update(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('tittle')?.value,
      this.form.get('body')?.value
    ).
    subscribe(response=>{

      if(response){

        this._snackBar.trigger('update','close')
      }


    })
  }
}
