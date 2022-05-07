import React, { useEffect, useState} from "react";
import * as execute from '../contracts/execute';
import { useConnectedWallet } from "@terra-money/wallet-provider";
import LoadingIndicator from '../components/LoadingIndicator';

const Play = () => {
    const connectedWallet = useConnectedWallet();
    const playTime = 15;

    const [time, setTime] = useState(playTime);
    const [ gameOver, setGameOver] = useState(false);
    // to track target position
    const [ targetPosition, setTargetPosition] = useState({top: "15%", left: "50%"});
    const [ loading, setLoading] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const unsubscribe = setInterval(() => {
            setTime(time => time > 0 ? time - 1: 0);
        }, 1000);
        return unsubscribe;
    }, []);

    useEffect(() => {
        if (time === 0) {
            setTargetPosition({display: 'none'});
            alert(`GameOver! Your score is ${score}. Please confirm transaction to submit your score`);
            submitScore();
        }
    }, [time]);

    const submitScore= async () => {
        if (connectedWallet && connectedWallet.network.name === 'testnet') {
            setLoading(true);
            const tx = await execute.setScore(connectedWallet, score);
            console.log(tx);
            alert('Score submitted!');
            setLoading(false);
            window.location.href = '/leaderboard';
        }
    };

    const handleClick = () => {
        let audio = new Audio("Zergling_explodes.mp3");
        audio.volume = 0.2;
        audio.play();
        setScore(score => score + 1);

        setTargetPosition({
            top: `${Math.floor(Math.random() * 70)}%`,
            left: `${Math.floor(Math.random() * 70)}%`,
        })
    };

    return (
        <div className="score-board-container">
            <div className="play-container">
                <span>Score: {score}</span>
                <span>Drink!</span>
                <span>Time left: {time} s</span>
            </div>
        <div className="game-container">
            <img src="beer.png" id="target" alt="Target" style={{ ...targetPosition }} onClick={handleClick} />
            <img src="pretzel.png" id="pretzel-img" alt="Pretzel" />
        </div>
    </div>
    )
}

export default Play;
