import { useEffect, useState } from "react";
import { Card, Rules, cards } from "../types";
import "./style.scss";
function randEle<T>(arr: T[]): T {
    const randInt = Math.floor(Math.random() * arr.length);
    return arr[randInt];
}
export default function GameWining({
    card,
    setCard,
    lastCards,
}: {
    card: Card;
    setCard: React.Dispatch<React.SetStateAction<Card | null>>;
    lastCards: Card[];
}) {
    const [oppCard, setOppCard] = useState<Card | null>(null);
    const [winingState, setWiningState] = useState<
        "Win" | "LOSE" | "Draw" | null
    >(null);
    console.log(winingState);
    useEffect(() => {
        setTimeout(() => {
            const oppCard = randEle(Rules[randEle(lastCards)]);
            setOppCard(oppCard);
            setTimeout(() => {
                if (oppCard) {
                    if (Rules[oppCard].includes(card))
                        return setWiningState("LOSE");
                    if (Rules[card].includes(oppCard))
                        return setWiningState("Win");
                    return setWiningState("Draw");
                }
            }, 1000);
        }, 1000);
    }, []);
    return (
        <section className="game">
            <div className="boxes">
                <div className="box">
                    <h3>YOU PICKED</h3>
                    <div className={`box-choice ${card}`}></div>
                </div>
                {winingState && (
                    <div className="win-lose-button">
                        <h2>
                            {winingState == "Win"
                                ? "YOU WIN"
                                : winingState == "LOSE"
                                ? "YOU LOSE"
                                : "DRAW"}
                        </h2>
                        <input
                            type="button"
                            value="PLAY AGAIN"
                            onClick={() => setCard(null)}
                        />
                    </div>
                )}

                <div className="box">
                    <h3>THE HOUSE PICKED</h3>
                    <div className={`box-choice ${oppCard || "empty"}`}></div>
                </div>
            </div>
        </section>
    );
}