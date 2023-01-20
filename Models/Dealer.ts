import { FULL_DECK } from "../Data/FullDeck";
import type { IDealer } from "../Interfaces/Dealer";
import type { Card } from "./Card";
import { Deck } from "./Deck";

export class Dealer implements IDealer {
    deck: Deck;

    constructor(deck?: Deck) {
        if(deck) {
            this.deck = deck;
        } else {
            this.deck = new Deck();
            FULL_DECK.forEach((card) => this.deck.push(card));
        }
    }

    deal(): Card | undefined {
        if(this.deck.isEmpty()) {
            console.log("The dealer has no more cards to deal");
            return undefined;
        }

        return this.deck.pop();
    };

    shuffle(): void {
        this.deck.shuffle();
    }

}