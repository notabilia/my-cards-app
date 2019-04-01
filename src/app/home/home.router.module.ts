import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home';

const routes: Routes = [
  {
    path: 'home',
    component: Home,
    children: [
      {
        path: 'people',
        children: [
          {
            path: '',
            loadChildren: '../pages/people/people.module#PeoplePageModule'
          }
        ]
      },
      {
        path: 'cards',
        children: [
          {
            path: '',
            loadChildren: '../pages/cards/cards.module#CardsPageModule'
          }
        ]
      },
      {
        path: 'occasions',
        children: [
          {
            path: '',
            loadChildren: '../pages/occasions/occasions.module#OccasionsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/cards',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/cards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
