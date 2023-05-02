/*
* File: app-routing.module.ts
* Author: Juhász Roland
* Copyright: 2023, Juhász Roland
* Group: Szoft II N
* Date: 2023-05-02
* Github: https://github.com/Roleeygit/ang_school
* Licenc: GNU GPL
*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from './school/school.component';

const routes: Routes = 
[
  {path: "school", component: SchoolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
