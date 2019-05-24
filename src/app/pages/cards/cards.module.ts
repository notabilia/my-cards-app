import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponentModule } from '../../components/card/card.module';
import { CardsPage } from './cards.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CardComponentModule,
    RouterModule.forChild([{ path: '', component: CardsPage }])
  ],
  declarations: [CardsPage]
})
export class CardsPageModule {}
