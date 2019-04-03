import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComingSoonComponentModule } from '../../components/coming-soon/coming-soon.module';
import { PeoplePage } from './people.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComingSoonComponentModule,
    RouterModule.forChild([{ path: '', component: PeoplePage }])
  ],
  declarations: [
    PeoplePage
  ]
})
export class PeoplePageModule {}
