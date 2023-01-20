import { Deck } from "../Models/Deck";
import { FULL_DECK } from "../../Data/FullDeck";

describe('Tests', () => {
    test('PASS', () => {
        expect(true).toBe(true);
    });

    test('Shuffled cards should contain a different combination from default', () => {
        //Arrange
        const mockDeck = new Deck();
        const shuffledDeck = new Deck();

        FULL_DECK.forEach((card) => mockDeck.push(card));
        FULL_DECK.forEach((card) => shuffledDeck.push(card));

        shuffledDeck.shuffle();

        expect(shuffledDeck).not.toEqual(mockDeck);
    })
});