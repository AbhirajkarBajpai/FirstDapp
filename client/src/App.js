import abi from "./contract/CoffeeShop.json";
import {useState, useEffect} from "react";
import { ethers } from "ethers";
import './App.css';
import Buy from "./Components/Buy";
import Orders from "./Components/Orders";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xf4D61aC3C00FA78a047B11C40F873595E8821662";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          // const provider = new ethers.BrowserProvider(window.ethereum);
          // await provider.send("eth_requestAccounts", []);
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);

  return (
    <div className="App">
      <p>Connected Account - {account}</p>
      <Buy state={state} />
      <Orders state={state} />
    </div>
  );
}

export default App;
