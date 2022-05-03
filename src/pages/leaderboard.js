import * as query from '../contracts/query';
import { useConnectedWallet } from '@terra-money/wallet-provider';

const LeaderBoard = () => {
    const connectedWallet = useConnectedWallet();

    const fetchScores = async () => {
        if (connectedWallet && connectedWallet.network.name === 'testnet') {
            console.log("Scores fetched:", (await query.getScores(connectedWallet)).scores);
        }
    }

    fetchScores();

    return (
        <></>
    );
};

export default LeaderBoard;
