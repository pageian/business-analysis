import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components import
import { MainComponent } from './main/main.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RevenueDisplayComponent } from './revenue-display/revenue-display.component';
import { GraphAnalyticsComponent } from './graph-analytics/graph-analytics.component';
import { ClientDisplayComponent } from './client-display/client-display.component';

// URL path definitions
const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },  // Index page
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'revenue', component: RevenueDisplayComponent },
  {path:'smartanalysis',component: GraphAnalyticsComponent},
  {path: 'clients', component: ClientDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
