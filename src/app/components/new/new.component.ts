import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  constructor(private http:HttpClient) {
  }

    form = new FormGroup({
      id:new FormControl('',Validators.required),
      userId:new FormControl('',Validators.required),
      body:new FormControl('',Validators.required),
      tittle:new FormControl('',Validators.required),

    })
  createData(){
    this.http.post<any>('https://jsonplaceholder.typicode.com/posts' , {
      id:this.form.get('id')?.value,
      userId:this.form.get('userId')?.value,
      tittle:this.form.get('tittle')?.value,
      body:this.form.get('body')?.value
    }).
    subscribe(response=>{

      if(response){
        alert('update')
      }


    })
  }
}
