import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  searchID:string = ''

  constructor(private http:HttpClient,private _snackBar: MatSnackBar) {
  }
  LoadData() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts?id='+this.searchID).
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
    this.http.put<any>('https://jsonplaceholder.typicode.com/posts/' + this.searchID  , {
      id:this.form.get('id')?.value,
      userId:this.form.get('userId')?.value,
      tittle:this.form.get('tittle')?.value,
      body:this.form.get('body')?.value
    }).
    subscribe(response=>{

      if(response){

        this._snackBar.open('saved','close',{
          horizontalPosition:"end",
          verticalPosition:"top",
          duration:5000,
          direction:"ltr"

        })
      }


    })
  }
}
