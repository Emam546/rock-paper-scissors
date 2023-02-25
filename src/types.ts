export type Card = "ROCK" | "PAPER" | "SCISSORS" | "LIZARD" | "SPOCK";
export const cards:Array<Card>=["ROCK" , "PAPER" , "SCISSORS" , "LIZARD" , "SPOCK"];
export const Rules: Record<Card, Card[]> = {
    ROCK: ["SCISSORS", "LIZARD"],
    PAPER: ["ROCK", "SPOCK"],
    SCISSORS: ["LIZARD", "PAPER"],
    LIZARD: ["PAPER", "SPOCK"],
    SPOCK: ["ROCK", "SCISSORS"],
};