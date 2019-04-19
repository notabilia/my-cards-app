import { Component, OnInit } from '@angular/core';
import { Card } from '../../models';

@Component({
  selector: 'app-cards',
  templateUrl: 'cards.page.html',
  styleUrls: ['cards.page.scss']
})
export class CardsPage implements OnInit {

  private cards: Card[];

  constructor() {}

  ngOnInit() {
    const card1: Card = {
        id: 1,
        description: 'My first card'
    };
    const card2: Card = {
            id: 2,
            description: 'My second card'
        };

    this.cards = [card1, card2];
  }

}
