import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCompComponent} from './view-comp/view-comp.component';
import { FormsCompComponent} from './forms-comp/forms-comp.component';

const routes: Routes = [
  { path: 'view', component: ViewCompComponent },
  { path: 'form', component: FormsCompComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
