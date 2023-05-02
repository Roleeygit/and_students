/*
* File:api.service
* Author: Juhász Roland
* Copyright: 2023, Juhász Roland
* Group: Szoft II N
* Date: 2023-05-02
* Github: https://github.com/Roleeygit/ang_school
* Licenc: GNU GPL
*/


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getStudents() 
  {
    let endpoint = 'students';
    let url = environment.localhost + endpoint;
    return this.http.get<any>(url);
  }

}


