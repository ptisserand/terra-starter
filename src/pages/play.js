import React, { useEffect, useState} from "react";
import * as execute from '../contracts/execute';
import { useConnectedWallet } from "@terra-money/wallet-provider";

const Play = () => {
    const connectedWallet = useConnectedWallet();
    const playTime = 15;

    const [score, setScore] = useState(0);
    const [time, setTime] = useState(playTime);

    const submitScore= async () => {
        if (connectedWallet && connectedWallet.network.name === 'testnet') {
            const tx = await execute.setScore(connectedWallet, score);
            console.log(tx);
            alert('Score submitted!');
        }
    };

    return (
        <div className="score-board-container">
            <div className="play-container">
                <span>Score: {score}</span>
                <span>Drink!</span>
                <span>Time left: {time} s</span>
            </div>

            <button className="cta-button connect-wallet-button" onClick={()=> setScore(score => score + 1)}>+1 score</button>

            <button className="cta-button connect-wallet-button" onClick={submitScore}>Submit Score</button>
        </div>
    )
}

export default Play;
