import { Component, OnInit } from '@angular/core';
import {patientList} from '../../PatientList'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  Patients = patientList
  constructor() { }

  ngOnInit(): void {
  }
  highlight(id : number){
    console.log(id)
  }
}
