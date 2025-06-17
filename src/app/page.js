import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.title}>RGB++ Guide</h1>
            <div className={styles.metadata}>
              <span className={styles.status}>
                <div className={styles.statusDot}></div>
                In progress
              </span>
              <time>Last edited: June 16, 2025 3:43 PM</time>
            </div>
          </header>

          <section className={styles.section}>
            <h2>Introduction</h2>
            <h3>What is RGB++?</h3>
            <p>
              The RGB++ Protocol is a simple protocol that enhances Bitcoin Layer 1 programmability by establishing a binding between Bitcoin UTXOs and Turing-complete CKB Scripts. This binding creates a powerful bridge between Bitcoin's security and CKB's programmability.
            </p>
            <p>
              At its core, RGB++ Protocol uses a specific Bitcoin UTXO as a <em>single-use seal</em> - a cryptographic commitment that can only be used once, leveraging Bitcoin's inherent UTXO properties. This UTXO, along with its corresponding CKB cells, serves as the cryptographic proof, or the <em>commitment</em>, of ownership for RGB++ assets. When a single-use seal is consumed, the ownership of the RGB++ asset is guaranteed to be transferred to the new UTXO or the wallet controlling it.
            </p>
            <p>
              The protocol employs CKB Cells to represent RGB++ asset ownership relationships, establishing an isomorphic binding with Bitcoin UTXOs. In this architecture, CKB serves dual roles: as a public database for assets and as an off-chain pre-settlement layer.
            </p>
            <p>
              With RGB++ Protocol, users can seamlessly issue Layer 2 assets on CKB and transfer them between Bitcoin and CKB networks, combining Bitcoin's security with CKB's programmability.
            </p>
            <p>
              For more detailed information, please refer to the <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/light-paper-en.md">RGB++ Protocol Light Paper</a> or its <a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/light-paper-cn.md">Chinese version</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Resources</h2>
            <h3>Protocol Overview</h3>
            <ul>
              <li><a href="https://talk.nervos.org/t/rgb-protocol-light-paper-translation/7790">RGB++ Protocol Light Paper</a> (English)</li>
              <li><a href="https://talk.nervos.org/t/rgb-protocol-light-paper/7733">RGB++ Protocol Light Paper</a> (中文)</li>
            </ul>

            <h3>Infrastructure</h3>
            <ul>
              <li><a href="https://explorer.rgbpp.io/">RGB++ Explorer</a> - Block explorer for RGB++ transactions and assets</li>
              <li><a href="https://github.com/RGBPlusPlus/btc-assets-api">btc-assets-api</a> - API service for BTC/RGB++ asset management and transaction processing</li>
            </ul>

            <h3>Core Components</h3>
            <h4>RGB++ Script</h4>
            <p>Core contracts that implement the RGB++ protocol, including the RGB++ lock script for asset ownership and BTC time lock for cross-chain security.</p>
            <ul>
              <li><a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/lockscript-design-prd-en.md">RGB++ Script Standard</a> (English)</li>
              <li><a href="https://github.com/RGBPlusPlus/RGBPlusPlus-design/blob/main/docs/lockscript-design-prd-cn.md">RGB++ Script Standard</a> (中文)</li>
              <li><a href="https://github.com/RGBPlusPlus/rgbpp">RGB++ Script Repository</a></li>
            </ul>

            <h3>CKB Bitcoin SPV</h3>
            <p>Light client implementation that enables CKB to verify Bitcoin transactions, providing a secure bridge between Bitcoin and CKB networks.</p>
            <ul>
              <li><a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv/blob/master/docs/Design.md">CKB Bitcoin SPV Design</a></li>
              <li><a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv-contracts">CKB Bitcoin SPV Contracts</a></li>
              <li><a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv">Bitcoin SPV library</a></li>
              <li><a href="https://github.com/RGBPlusPlus/ckb-bitcoin-spv-service">CKB Bitcoin SPV Service</a></li>
            </ul>

            <h3>Development Tools</h3>
            <ul>
              <li><a href="https://github.com/ckb-devrel/ccc/tree/rgbpp-sdk">RGB++ SDK (Primary) - TypeScript/JavaScript</a></li>
              <li><a href="https://github.com/RGBPlusPlus/rgbpp-sdk">RGB++ SDK (Legacy) - TypeScript/JavaScript</a></li>
            </ul>

            <h3>Community Resources</h3>
            <ul>
              <li><a href="https://talk.nervos.org/t/rgb-rgb-ckb/7791/1">从 RGB 到 RGB++：CKB如何赋能比特币生态资产协议</a></li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Core Concepts</h2>
            <p>
              As the name suggests, RGB++ protocol is inspired by the <a href="https://docs.rgb.info/">RGB protocol</a>. RGB++ inherits the core concepts from it, while leveraging CKB's unique advantages to enhance and extend these concepts.
            </p>
            <p>
              The following are the core concepts of the RGB++ protocol and key differences from the RGB protocol.
            </p>

            <h3>Single-Use Seal</h3>
            <p>
              Single-use seals are a cryptographic mechanism that locks a seal on a message, ensuring that the message can only be read or used once. The RGB++ protocol leverages Bitcoin UTXOs' inherent single-use property to implement this sealing mechanism.
            </p>
            <p>
              Through the use of single-use seals, the RGB++ protocol creates assets that are cryptographically bound to specific Bitcoin UTXOs. The ownership of these corresponding UTXOs directly establishes ownership of the RGB++ issued assets. To transfer a RGB++ asset, the holder must spend their corresponding UTXO, which effectively consumes the single-use seal and ensures the asset can only be transferred once.
            </p>
            <p>
              For a comprehensive explanation of single-use seals, please refer to this <a href="https://petertodd.org/2016/state-machine-consensus-building-blocks#uniqueness-and-single-use-seals">technical article</a>.
            </p>

            <h3>Blockchain-enhanced State Validation</h3>
            <p>
              The concept of creating and managing assets on Bitcoin has been a long-standing pursuit in the cryptocurrency space. While Bitcoin's UTXO model provides a robust foundation for value transfer, its intentionally limited scripting system falls short in implementing the sophisticated security validations required for complex asset management, thus creating a need for complementary off-chain smart contract solutions.
            </p>
            <p>
              The RGB protocol employs client-side validation, where transaction verification doesn't require scanning the entire blockchain to collect contract state changes. Instead, it only needs a series of relevant Bitcoin transactions, the RGB transactions committed by these Bitcoin transactions, and their block inclusion proofs (based on Merkle proofs from block headers). This approach significantly reduces the cost of verifying a specific state of a contract. However, this design presents challenges for ordinary users: when using simple client applications, they often lack the capability or resources to maintain complete transaction histories, making it difficult to provide transaction proofs to their counterparts.
            </p>
            <p>
              RGB++ takes a different approach by leveraging CKB's Turing-complete script system to implement asset security checks. This design offers a more straightforward and accessible verification process for all users. By enforcing security checks on-chain, RGB++ eliminates the need for complex client-side validation while maintaining system transparency. Users only need to verify relevant transactions on CKB to confirm the correctness of RGB++ transaction state calculations, significantly reducing the burden on end users.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Typical Transaction Flow</h2>
            <p>
              As defined by the protocol, each RGB++ transaction generates a pair of corresponding transactions: one on the Bitcoin and one on the CKB.
            </p>
            <p>
              The following is a typical transaction flow:
            </p>
            <div className={styles.imageContainer}>
              <Image
                src="https://raw.githubusercontent.com/RGBPlusPlus/RGBPlusPlus-design/main/docs/assets/wp-tx-general.png"
                alt="RGB++ Transaction Flow"
                width={800}
                height={400}
                className={styles.image}
              />
            </div>

            <h3>1. Off-chain pre-computation</h3>
            <p>
              Let's assume <code>btc_utxo#1</code> is the single-use seal that will be consumed in this RGB++ transaction, while <code>btc_utxo#2</code> will serve as the new single-use seal after the transaction completes.
            </p>
            <p>
              In parallel, the CKB cell(s) that are isomorphically bound to <code>btc_utxo#1</code> are selected as inputs for the CKB transaction <code>CKB_TX_B</code>. The output(s) of <code>CKB_TX_B</code> will maintain the latest state of the RGB++ asset.
            </p>
            <p>
              It's important to note that during the off-chain pre-computation phase, the Bitcoin transaction has not yet been submitted, so the transaction id component of <code>btc_utxo#2</code> is not yet available. In this case, a placeholder value is used as a temporary substitute.
            </p>
            <p>
              The commitment is computed using the following formula:
            </p>
            <p>
              <code>commitment = hash(CKB_TX_B | btc_utxo#1 | btc_utxo#2)</code>
            </p>

            <h3>2. Bitcoin Transaction Submission</h3>
            <p>
              In this phase, the actual Bitcoin transaction <code>Bitcoin_TX_A</code> is submitted. The transaction's input consumes <code>btc_utxo#1</code>, while its two outputs serve distinct purposes: the first output uses an <code>OP_RETURN</code> script to store the commitment calculated in the previous phase, and the second output creates <code>btc_utxo#2</code>.
            </p>

            <h3>3. CKB Transaction Submission</h3>
            <p>
              In this phase, the CKB transaction <code>CKB_TX_B</code> is submitted, with the RGB++ asset's latest state recorded in <code>CKB_TX_B.output.data</code> field.
            </p>
            <p>
              Consequently, <code>btc_utxo#2</code> becomes the new single-use seal required for initiating the next state change, while <code>CKB_TX_B.output</code> represents the current state of the RGB++ asset.
            </p>

            <h3>4. On-chain Verification</h3>
            <p>In this phase, the following checks are performed:</p>
            <ul>
              <li>UTXOs related to Bitcoin validations are spent only once;</li>
              <li>A lightweight client on CKB confirms the existence of this Bitcoin transaction on the Bitcoin blockchain;</li>
              <li>The Bitcoin transaction is submitted as a witness in the CKB transaction;</li>
              <li>CKB ensures that the Bitcoin transaction has spent the correct UTXO;</li>
              <li>CKB validates that the Bitcoin transaction commits to the correct commitment;</li>
              <li>Finally, CKB confirms that the state transition on CKB complies with the predefined contract rules.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Core Components</h2>
            <h3>RGB++ Scripts</h3>
            <p>
              As described in the Typical Transaction Flow section, isomorphic binding requires that RGB++ transactions must be submitted on the Bitcoin chain, and that users utilize single-use seals on Bitcoin to describe operations on RGB++ cells. The transaction process follows these steps: first, the user constructs the CKB raw transaction and the RGB++ commitment; then, submits Bitcoin transaction that contains the commitment; and finally, submits the final CKB transaction.
            </p>
            <p>
              The ownership of Bitcoin UTXOs is encoded in the lock script of RGB++ Cells, specified by the combination of the Bitcoin transaction ID and output index.
            </p>
            <p>
              Regarding the commitment calculation, it encompasses the first <code>N</code> consecutive inputs and outputs, where <code>N</code> must include all inputs and outputs with non-null <code>Type</code> scripts. Any additional inputs and outputs with null <code>Type</code> scripts that follow these first <code>N</code> elements can be included in the CKB transaction without affecting the commitment. This design allows for flexible transaction fee adjustments while maintaining the integrity of the commitment.
            </p>

            <h3>SPV Service</h3>
            <p>
              Within the programmable layer of RGB++, a Bitcoin SPV light client maintains a synchronized record of Bitcoin block headers, enabling smart contracts to access and verify Bitcoin blockchain data, including historical transaction records, block difficulty, network hash rate, current block height, timestamps, and detailed transaction information, thereby providing a secure and efficient bridge between Bitcoin and CKB networks.
            </p>
            <p>
              SPV Service on CKB does the following:
            </p>
            <ol>
              <li>Prove if a header belongs to the Bitcoin chain</li>
              <li>Prove if a transaction is in a Bitcoin block</li>
            </ol>
            <p>
              To achieve this, CKB Bitcoin SPV Service does the following:
            </p>
            <ol>
              <li>Synchronizes Bitcoin headers to to Bitcoin SPV clients running on the CKB chain</li>
              <li>Generate proofs for Bitcoin transactions so that they can be verified on CKB</li>
            </ol>

            <h3>RGB++ SDK</h3>
            <p>
              At its core, the RGB++ SDK is focused on verifying and recording RGB++ asset ownership. In a regular BTC transaction, once the transaction is signed with a private key and broadcast to the network, it is considered complete after being validated and confirmed by most BTC nodes.
            </p>
            <p>
              However, with RGB++'s isomorphic binding, the consumption and generation of bound UTXOs and CKB Cells must maintain atomicity. It relies on btc-assets-api and SPV Service to faithfully synchronize RGB++ asset transaction information from BTC to CKB, while recording the resulting ownership changes in CKB Cells.
            </p>
            <p>
              That's where the RGB++ SDK comes in. It can be understood as a wallet operating within the RGB++ protocol semantics, capable of managing assets on both BTC and CKB chains, thereby facilitating RGB++ asset operations. Beyond basic BTC/CKB private key signature verification, the RGB++ SDK extends the signature verification process for RGB++ assets from the BTC chain to the CKB chain through the SPV Service and RGB++ contracts. From this perspective, the RGB++ SDK also provides the functionality of an RGB++ asset signature verifier.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Quick Start</h2>
            <p>Before you start, refer to the btc-assets-api section to apply for an access token.</p>

            <h3>UDT</h3>
            <p>
              In CKB, custom tokens are implemented as User-Defined Tokens (UDTs). The CKB core team has established a minimal standard for UDTs called xUDT (extensible UDT). In this section, we demonstrate the RGB++ protocol by issuing a RGB++ token using the pre-deployed xUDT Script.
            </p>
            <p>
              For a comprehensive guide on issuing fungible tokens on CKB, please refer to the tutorial: <a href="https://docs.nervos.org/docs/dapp/create-token">Create a Fungible Token</a>. The following discussion will focus on the RGB++-specific aspects of the token issuance process.
            </p>
            <p>
              The complete implementation is available in the <a href="https://github.com/ckb-devrel/ccc/tree/rgbpp-sdk/packages/rgbpp/src/examples/udt">RGB++ SDK repository</a>.
            </p>

            <h4>Installation</h4>
            <p>First, install the RGB++ SDK:</p>
            <pre className={styles.code}>
              <code>npm install @ckb-devrel/rgbpp-sdk</code>
            </pre>

            <h4>Configuration</h4>
            <p>Create a configuration file with your API token and network settings:</p>
            <pre className={styles.code}>
              <code>{`const config = {
  apiToken: 'your-api-token',
  network: 'testnet', // or 'mainnet'
  btcAssetsApiUrl: 'https://btc-assets-api.example.com',
  spvServiceUrl: 'https://spv-service.example.com'
};`}</code>
            </pre>

            <h4>Issuing a UDT</h4>
            <p>Here's how to issue a new UDT using the RGB++ SDK:</p>
            <pre className={styles.code}>
              <code>{`import { RgbppClient } from '@ckb-devrel/rgbpp-sdk';

async function issueUDT() {
  const client = new RgbppClient(config);
  
  // Create UDT parameters
  const udtParams = {
    name: 'My RGB++ Token',
    symbol: 'MRT',
    decimals: 8,
    totalSupply: '1000000000000000', // 10 million tokens
    description: 'My first RGB++ token'
  };

  try {
    // Issue the UDT
    const result = await client.issueUDT(udtParams);
    console.log('UDT issued successfully:', result);
    
    // Get the UDT ID
    const udtId = result.udtId;
    console.log('UDT ID:', udtId);
  } catch (error) {
    console.error('Failed to issue UDT:', error);
  }
}`}</code>
            </pre>

            <h4>Transferring UDTs</h4>
            <p>To transfer UDTs between addresses:</p>
            <pre className={styles.code}>
              <code>{`async function transferUDT() {
  const client = new RgbppClient(config);
  
  const transferParams = {
    udtId: 'your-udt-id',
    fromAddress: 'your-bitcoin-address',
    toAddress: 'recipient-bitcoin-address',
    amount: '100000000', // 1 token
    fee: '1000' // satoshis
  };

  try {
    const result = await client.transferUDT(transferParams);
    console.log('Transfer successful:', result);
  } catch (error) {
    console.error('Transfer failed:', error);
  }
}`}</code>
            </pre>

            <h4>Querying UDT Balance</h4>
            <p>To check the balance of a UDT:</p>
            <pre className={styles.code}>
              <code>{`async function getUDTBalance() {
  const client = new RgbppClient(config);
  
  try {
    const balance = await client.getUDTBalance({
      udtId: 'your-udt-id',
      address: 'your-bitcoin-address'
    });
    console.log('UDT Balance:', balance);
  } catch (error) {
    console.error('Failed to get balance:', error);
  }
}`}</code>
            </pre>

            <h4>Best Practices</h4>
            <ul>
              <li>Always test your implementation on testnet first</li>
              <li>Keep your API token secure and never expose it in client-side code</li>
              <li>Implement proper error handling and retry mechanisms</li>
              <li>Monitor transaction status and implement appropriate confirmation waiting</li>
              <li>Consider implementing a caching layer for frequently accessed data</li>
            </ul>

            <h4>Common Issues and Solutions</h4>
            <ul>
              <li>
                <strong>Transaction Timeout</strong>
                <p>If a transaction times out, check the transaction status using the transaction ID. You may need to implement a retry mechanism.</p>
              </li>
              <li>
                <strong>Insufficient Balance</strong>
                <p>Ensure you have enough BTC to cover both the transaction amount and the network fees.</p>
              </li>
              <li>
                <strong>API Rate Limiting</strong>
                <p>Implement rate limiting in your application to avoid hitting API limits.</p>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}
