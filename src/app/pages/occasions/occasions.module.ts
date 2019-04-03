import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComingSoonComponentModule } from '../../components/coming-soon/coming-soon.module';
import { OccasionsPage } from './occasions.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComingSoonComponentModule,
    RouterModule.forChild([{ path: '', component: OccasionsPage }])
  ],
  declarations: [
    OccasionsPage
  ]
})
export class OccasionsPageModule {}
