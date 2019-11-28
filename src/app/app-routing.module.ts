import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AltaComponent } from './components/alta/alta.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"alta", component: AltaComponent},
  {path:"list", component: ListComponent},
  {path:"edit", component: EditComponent},
  {path:"**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
