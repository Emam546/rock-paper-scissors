import { useState } from "react";
import "./style.scss";
export function RulePopUp() {
    const [state, setState] = useState(false);
    return (
        <section className="rules">
            <button className="rule-button" onClick={() => setState(true)}>
                RULES
            </button>
            {state && (
                <div className="rules-container">
                    <div className="head">
                        <h1>RULES</h1>
                        <button
                            className="close-button"
                            onClick={() => setState(false)}
                        >
                            <img src="./images/icon-close.svg" alt="" />
                        </button>
                    </div>
                    <img src="./images/image-rules-bonus.svg" alt="" />
                </div>
            )}
        </section>
    );
}
