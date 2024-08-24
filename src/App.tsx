import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39";
import { EthWallet } from './component/EthWallet';
import { SolanaWallet } from './component/SolanaWallet';


function App() {
  const [mnemonic, setMnemonic] = useState("");
  return (
    <>
     <button onClick={async function() {
        const mn = await generateMnemonic();
        setMnemonic(mn)
      }}>
      Create Seed Phrase
    </button>
    <p>{mnemonic}</p>
    <EthWallet mnemonic={mnemonic} />
    <SolanaWallet mnemonic={mnemonic} />
    </>
  )
}

export default App
