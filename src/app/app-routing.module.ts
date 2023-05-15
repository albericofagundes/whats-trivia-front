import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './views/cadastro-user/user-registration.component';
import { BlankLayoutComponent } from './shared/components/blank-layout/blank-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'register',
        component: UserRegistrationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
