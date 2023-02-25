import { useState } from "react";
import "./style.scss";
import { Card } from "../types";

export default function Landing({setCard}:{setCard:React.Dispatch<React.SetStateAction<Card | null>>}) {
    const func=(card:Card)=>()=>setCard(card)
    return (
        <section className="landing">
            <div className="boxes-container">
                <img src="./images/bg-pentagon.svg" alt="" />
                <div className="box-choice PAPER" onClick={func("PAPER")}></div>
                <div className="box-choice SCISSORS" onClick={func("SCISSORS")}></div>
                <div className="box-choice SPOCK" onClick={func("SPOCK")}></div>
                <div className="box-choice LIZARD" onClick={func("LIZARD")}></div>
                <div className="box-choice ROCK" onClick={func("ROCK")}></div>
            </div>
        </section>
    );
}
