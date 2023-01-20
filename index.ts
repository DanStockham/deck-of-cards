import { Deck } from "./Models/Deck";
import { FULL_DECK } from "./Data/FullDeck"

const mainDeck: Deck = new Deck();

FULL_DECK.forEach((card) => mainDeck.push(card));







