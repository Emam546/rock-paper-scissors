import { useEffect, useState } from "react";
import "./App.scss";
import Landing from "./landing";
import NavBar from "./navbar";
import { Card } from "./types";
import GameWining from "./game";
import { RulePopUp } from "./Rules";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
    const [card, setCard] = useState<Card | null>(null);
    const [lastCards, setLastCards] = useLocalStorage<Card[]>(["SCISSORS"], "lastCards");
    useEffect(() => {
        if (card) setLastCards([...lastCards.slice(lastCards.length-20), card]);
    }, [card]);
    return (
        <>
            <NavBar />
            <main>
                {!card && <Landing setCard={setCard} />}
                {card && (
                    <GameWining card={card} setCard={setCard} lastCards={lastCards}></GameWining>
                )}
                <RulePopUp />
            </main>
        </>
    );
}

export default App;
