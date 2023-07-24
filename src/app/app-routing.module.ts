import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FirstComponent } from './first/first.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sample', component:SampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
