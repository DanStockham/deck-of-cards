import { Card } from "./Card";
import type { Stack } from "../Interfaces/Stack";

export class Deck implements Stack<Card> {
    [n: number]: Card;

    length: number = 0;

    pointer: number = -1;

    max: number = 52; // Full deck of cards excluding jokers
    
    isEmpty(): boolean {
       return this.length === 0;
    }

    push(value: Card): number {
        if(this.length === this.max) {
            throw new Error(`StackOverflow: capacity has exceeded max limit of ${this.max} `);
        }

        this.pointer += 1;
        this[this.pointer] = value;
        this.length += 1;

        return this.length;
    }

    pop(): Card | undefined {
        if(this.length < 1) {
            throw new Error(`StackUnderflow: There are no items in the stack`);
        }

        const topValue = this[this.pointer];
        this.pointer -= 1;
        this.length -= 1;

        return topValue;
    }

    peek(): Card | undefined {
        if(this.length < 1) {
            console.log('This deck is empty')
            return undefined;
        }

        return this[this.pointer];
    }

    print(): void {
        for(let i = 0; i <= this.pointer; i++) {
            const strinifiedCard = JSON.stringify(this[i])
            if(i === 0) {
                console.log(`TOP => ${strinifiedCard}`);
            }

            if(i === this.pointer) {
                console.log(`BOTTOM => ${strinifiedCard}`);
                return;
            }

            console.log(strinifiedCard);
        }
    }

    shuffle(): void {
        const cutDecks = [new Deck(), new Deck()];
        const currentDeckAmount = this.length;

        //Cut the deck
        while(this.length !== 0) {
            const cutDeckPointer = cutDecks[0].length > cutDecks[1].length ? 1 : 0;
            const currentCard = this.pop();

            if(currentCard) {
                cutDecks[cutDeckPointer].push(currentCard)
            }
        }

        //Shuffle the deck
        while(this.length !== currentDeckAmount) {
            const random = Math.round(Math.random() * 1);
            let selectedCard: Card | undefined = undefined;

            if(cutDecks[random].isEmpty()) {
                cutDecks.forEach((deck) => {
                    if(!deck.isEmpty()) {
                        selectedCard = deck.pop();
                        return;
                    }
                })
            } else {
                selectedCard = cutDecks[random].pop();
            }


            if(selectedCard) {
                this.push(selectedCard);
            } else {
                throw new Error('NullException: You cannot put a null value in the main deck')
            }
        }
    }

}