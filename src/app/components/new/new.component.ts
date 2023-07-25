import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

    form = new FormGroup({
      id:new FormControl,
      userId:new FormControl,
      body:new FormControl,
      tittle:new FormControl,

    })
  createData(){
    console.log(this.form)
  }
}
