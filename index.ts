import type { Card } from "./Models/Card";
import { Dealer } from "./Models/Dealer";


const dealer = new Dealer();
const cardsPerHand = 5;
let currentHands: Card[][] = [[], []];

dealer.shuffle();

currentHands = currentHands.map((hand) => {
    for(let i = 0; i < cardsPerHand; i++) {
        const dealtCard = dealer.deal();

        if(dealtCard) {
            hand.push(dealtCard);
        } else {
            throw new Error('The dealer has run out of cards');
        }
    }

    return hand;
})

console.log(currentHands);




