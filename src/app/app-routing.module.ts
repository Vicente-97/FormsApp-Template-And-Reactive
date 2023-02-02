import { NgModule } from '@angular/core';

import { RouterModule, Routes} from '@angular/router';


import { NonFoundComponent } from './shared/non-found/non-found.component';





const routes: Routes = [
  { 
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => m.TemplateModule )
  },
  { 
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule )
  },
  {
    path: '',
    redirectTo: 'template',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NonFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

