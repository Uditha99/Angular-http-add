import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../Service/post.service";
import {SnackBarService} from "../../Service/snack-bar.service";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  constructor(private postServise:PostService,private _snackBar: SnackBarService) {
  }

    form = new FormGroup({
      id:new FormControl('',Validators.required),
      userId:new FormControl('',Validators.required),
      body:new FormControl('',Validators.required),
      tittle:new FormControl('',Validators.required),

    })
  createData(){
    this.postServise.create(
      this.form.get('id')?.value,
      this.form.get('userId')?.value,
      this.form.get('tittle')?.value,
      this.form.get('body')?.value
    ).
    subscribe(response=>{

      if(response){

        this._snackBar.trigger('added' , 'close')
      }


    })
  }
}
