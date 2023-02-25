import "./style.scss";
export default function NavBar() {
    return (
        <header className="header">
            <div className="container">
                <div className="box">
                    <div className="text-container">
                        <span> Rock</span>
                        <span> Paper</span>
                        <span> Scissors</span>
                        <span> Lizard</span>
                        <span> Spock</span>
                    </div>
                    <div className="score-container">
                        <span className="head">Score</span>
                        <span className="score">12</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
