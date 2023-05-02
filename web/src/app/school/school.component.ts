/*
* File: school.component.ts
* Author: Juhász Roland
* Copyright: 2023, Juhász Roland
* Group: Szoft II N
* Date: 2023-05-02
* Github: https://github.com/Roleeygit/ang_school
* Licenc: GNU GPL
*/


import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  students: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() 
  {
    this.api.getStudents().subscribe({
      next: (response: any) => {
        this.students = response;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
