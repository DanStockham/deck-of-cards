import type { Card } from "../Models/Card";
import type { Deck } from "../Models/Deck";

export interface IDealer {
    deck: Deck;

    deal: () => Card | undefined;
    shuffle: () => void;
}