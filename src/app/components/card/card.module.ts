import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    IonicModule
  ],
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ]
})
export class CardComponentModule {}
