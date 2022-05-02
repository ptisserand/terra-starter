import './App.css';
import { useWallet, WalletStatus } from '@terra-money/wallet-provider';

function App() {
  // current wallet status 
  const { status, connect, disconnect, availableConnectTypes } = useWallet();

  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className='connect-wallet-div'>
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => connect("EXTENSION")}
            className="cta-button connect-wallet-button"
          >
            Connect wallet
          </button>
        </div>
      )
    }
    else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect
        </button>
      )
    }
  }
  console.log("Wallet status is:", status);
  console.log("Available connection types:", availableConnectTypes);

  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>🍺 The World's End 🍺</h1>
          <p>Only you can bring us to the last pub</p>
        </div>

      </header>

      <div>
        <img id="pub-img"
          src="https://simonpegg.net/wp-content/uploads/2013/07/theworldsendpub-707x1024.jpg"
          alt="The World's end pub"

        />
      </div>
      {renderConnectButton()}
    </main>
  );
}

export default App;
